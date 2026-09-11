import BorderedImage from './BorderedImage'

export default function PracticeFeature() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <BorderedImage
        src="/why/coding.png"
        alt="Học sinh xây dựng năng lực AI qua workshop thực tế"
      />

      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-lg text-white">
              ⌂
            </span>
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
              Future Skills – Năng lực cho thế hệ mới
            </h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
          AI là một trong những năng lực quan trọng của thế hệ tương lai. AI57 giúp
          học sinh xây dựng nền tảng kiến thức AI vững chắc, hiểu bản chất công nghệ thay vì chỉ
          phụ thuộc vào các công cụ đang có.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
          Trên nền tảng đó, học sinh được chủ động lựa chọn các workshop phù hợp với sở thích, năng
          lực và định hướng tương lai – từ Công nghệ, Data, Marketing, Giáo dục đến Sáng tạo và Kinh
          doanh. Mỗi workshop gắn với một sản phẩm thực tế, giúp học sinh vừa khám phá lĩnh vực phù
          hợp, vừa từng bước xây dựng năng lực và Portfolio cá nhân.
        </p>
        <p className="mt-4 text-sm font-semibold italic text-primary md:text-base">
          Vững nền tảng – tự chọn hướng đi – chủ động kiến tạo tương lai.
        </p>
      </div>
    </div>
  )
}
