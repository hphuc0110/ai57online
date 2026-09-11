import CtaButton from '../CtaButton'
import FeatureBadges from './FeatureBadges'
import HeroOutcomes from './HeroOutcomes'

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <span className="inline-block max-w-full rounded-full bg-primary-light px-3 py-1.5 text-[9px] font-bold uppercase leading-snug tracking-wide text-gray-900 sm:px-4 sm:py-2 sm:text-[11px]">
        AI57 · Học AI không giới hạn địa lý
      </span>

      <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-hero-navy">AI</span>
        <span className="text-card-end">57</span>
      </h1>

      <p className="mt-3 text-lg font-extrabold uppercase tracking-wide text-primary sm:mt-4 sm:text-xl md:text-2xl">
        Ươm mầm cho Học viện AI cho VIệt Nam
      </p>
      <p className="mt-1 text-lg text-gray-900 sm:text-xl md:text-2xl">
      </p>

      <div className="mt-6 max-w-xl sm:mt-8">
        <p className="text-sm leading-relaxed text-gray-600 italic sm:text-base">
          “Thế giới đang bước vào một cuộc chiến giành quyền dẫn đầu AI giữa các cường quốc lớn
          với quy mô chưa từng có tiền lệ: hàng nghìn tỷ USD đổ vào hạ tầng, hàng trăm nghìn tỷ
          token được xử lý mỗi ngày, và cuộc đua không còn dừng ở công nghệ mà đã trở thành cuộc
          chiến giành vị thế quốc gia.”
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          Trong cuộc đua đó, Việt Nam đang đứng trước một lợi thế lớn khi vươn lên như một điểm
          sáng tại Đông Nam Á về phát triển AI và hạ tầng Data Center. Để biến lợi thế về hạ tầng
          và công nghệ thành lợi thế về con người, Việt Nam cần chuẩn bị nguồn nhân lực AI từ sớm.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          AI57 ra đời với mục tiêu đưa giáo dục AI bài bản đến học sinh trên toàn
          quốc, xóa bỏ giới hạn địa lý và xây dựng năng lực AI từ nền tảng đến phát triển sản
          phẩm.
        </p>
      </div>

      <HeroOutcomes />

      <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
        <CtaButton
          openRegistrationForm
          className="w-full !rounded-xl !px-6 !py-3.5 !text-sm !shadow-lg sm:w-auto sm:!px-7"
        >
          Đăng ký tư vấn miễn phí
        </CtaButton>
        <CtaButton
          href="/lo-trinh"
          variant="neutral"
          className="w-full !rounded-xl !px-6 !py-3.5 !text-sm !font-semibold !normal-case !tracking-normal sm:w-auto sm:!px-7"
        >
          Khám phá lộ trình
        </CtaButton>
      </div>

      <FeatureBadges />
    </div>
  )
}
