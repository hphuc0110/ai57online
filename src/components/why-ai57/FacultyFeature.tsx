import BorderedImage from './BorderedImage'
import BrandLogo from '../BrandLogo'

export default function FacultyFeature() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-xl text-white">
            🎓
          </span>
          <h3 className="min-w-0 flex-1 text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            Giảng viên &amp; Mentor chuyên môn cao
          </h3>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
          AI57 được giảng dạy và đồng hành bởi đội ngũ giảng viên, mentor đến từ các
          trường đại học hàng đầu trong lĩnh vực công nghệ, có nền tảng chuyên môn vững chắc và kinh
          nghiệm làm việc thực tế.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
          Đội ngũ giảng dạy kết hợp giữa kiến thức học thuật chuyên sâu và kinh nghiệm triển khai
          thực tế, giúp học sinh không chỉ hiểu bản chất công nghệ AI mà còn biết cách phân tích bài
          toán, lựa chọn phương pháp, xây dựng và hoàn thiện sản phẩm AI.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
          Trong quá trình học, mentor trực tiếp hướng dẫn workshop, hỗ trợ giải quyết vấn đề, đồng
          hành cùng từng nhóm dự án và phản hồi sản phẩm, giúp học sinh hình thành tư duy làm dự án
          và kỹ năng ứng dụng AI ngay từ sớm.
        </p>
        <p className="mt-4 text-sm font-semibold italic text-primary md:text-base">
          Học với chuyên gia – làm cùng mentor – phát triển năng lực toàn diện
        </p>
      </div>

      <div className="order-1 lg:order-2">
        <BorderedImage
          src="/why/kiket.png"
          alt="Giảng viên Đại học Bách Khoa Hà Nội giảng dạy"
        />
      </div>
    </div>
  )
}
