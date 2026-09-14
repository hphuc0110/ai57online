/**
 * AI57 — Form đăng ký tư vấn → Google Sheet
 *
 * CÁCH SETUP:
 * 1. Tạo Google Sheet mới, đặt tên sheet tab là "DangKy" (hoặc đổi SHEET_NAME bên dưới).
 * 2. Hàng 1 (header) — hoặc để script tự tạo:
 *    Timestamp | Họ tên học sinh | Người giám hộ | Số điện thoại | Hình thức liên hệ | Liên hệ khác | Ghi chú
 * 3. Extensions → Apps Script → dán toàn bộ file này → Save.
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy Web App URL → dán vào file .env của project:
 *    VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 * 6. Restart `npm run dev`
 */

var SHEET_NAME = 'DangKy'

var HEADERS = [
  'Timestamp',
  'Họ tên học sinh',
  'Người giám hộ',
  'Số điện thoại',
  'Hình thức liên hệ',
  'Liên hệ khác',
  'Ghi chú',
]

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ success: false, message: 'Không nhận được dữ liệu.' })
    }

    var data = JSON.parse(e.postData.contents)
    var studentName = String(data.studentName || '').trim()
    var phone = String(data.phone || '').trim()

    if (!studentName || !phone) {
      return jsonResponse_({
        success: false,
        message: 'Thiếu họ tên học sinh hoặc số điện thoại.',
      })
    }

    var sheet = getOrCreateSheet_()
    ensureHeaders_(sheet)

    sheet.appendRow([
      new Date(),
      studentName,
      String(data.guardianName || '').trim(),
      phone,
      String(data.contactMethod || '').trim(),
      String(data.contactOther || '').trim(),
      String(data.notes || '').trim(),
    ])

    return jsonResponse_({ success: true, message: 'Đã lưu đăng ký.' })
  } catch (err) {
    return jsonResponse_({
      success: false,
      message: err && err.message ? err.message : String(err),
    })
  }
}

/** Mở URL Web App trên trình duyệt để kiểm tra script còn sống. */
function doGet() {
  return jsonResponse_({
    success: true,
    message: 'AI57 Registration API sẵn sàng. Gửi POST JSON từ form.',
  })
}

function getOrCreateSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }
  return sheet
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    return
  }

  var firstCell = sheet.getRange(1, 1).getValue()
  if (!firstCell) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
  }
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
