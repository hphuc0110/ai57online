import type { ReactNode } from 'react'
import BrandLogo from '../BrandLogo'
import BorderedImage from '../why-ai57/BorderedImage'
import SectionTitle from '../SectionTitle'

const coreValues = [
  {
    title: 'Sáng tạo',
    description:
      'Khuyến khích cách nghĩ, cách tiếp cận vấn đề vượt khuôn mẫu sẵn có, trong cả nội dung giảng dạy lẫn cách người học giải quyết vấn đề.',
  },
  {
    title: 'Đổi mới',
    description:
      'Không ngừng làm mới chương trình, phương pháp và công cụ giảng dạy theo nhịp độ thay đổi của thế giới, thay vì đứng yên với những gì đã có.',
  },
  {
    title: 'Thích ứng',
    description:
      'Xây dựng cho người học năng lực nội tại quan trọng nhất trong một thế giới biến động: khả năng thích nghi nhanh và vững vàng trước những thay đổi không thể đoán trước.',
  },
  {
    title: 'Hội nhập',
    description:
      'Trang bị cho người học tư duy và năng lực để chủ động kết nối, cạnh tranh sòng phẳng trên một sân chơi rộng lớn hơn phạm vi quen thuộc.',
  },
  {
    title: 'Tận tâm',
    description:
      'Mỗi học viên là một hành trình riêng. Đồng hành sát sao, lắng nghe và điều chỉnh trong suốt quá trình học để việc học thực sự phù hợp với từng người.',
  },
  {
    title: 'Đồng hành',
    description:
      'Mối quan hệ với người học không dừng lại khi khóa học kết thúc, mà tiếp tục trên hành trình phát triển sự nghiệp và bản thân về sau.',
  },
]

function FeatureBlock({
  title,
  image,
  imageAlt,
  reverse = false,
  children,
}: {
  title: string
  image: string
  imageAlt: string
  reverse?: boolean
  children: ReactNode
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={reverse ? 'order-1 lg:order-2' : ''}>
        <BorderedImage src={image} alt={imageAlt} />
      </div>
      <div className={reverse ? 'order-2 lg:order-1' : ''}>
        <h3 className="text-xl font-extrabold text-primary sm:text-2xl">{title}</h3>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">{children}</div>
      </div>
    </div>
  )
}

export default function HLEContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hle/cover.jpg"
            alt="Hồng Lĩnh Education"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-navy/85 via-hero-navy/70 to-primary/55" />
        </div>
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-center px-4 py-16 sm:min-h-[48vh] sm:py-20 md:px-6 md:py-24">
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hồng Lĩnh Education
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            Kiến tạo thế hệ công dân toàn cầu — vững nền tảng tri thức, tư duy độc lập và năng lực
            thích ứng để tự tin vươn ra thế giới.
          </p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle title="Giới thiệu" />
          <div className="mt-10">
            <FeatureBlock
              title="Hành trang thực chất cho thời đại hội nhập"
              image="/hle/intro.jpg"
              imageAlt="Giới thiệu Hồng Lĩnh Education"
            >
              <p>
                Thế giới đang bước vào một giai đoạn chuyển động chưa từng có, khi tri thức và năng
                lực con người trở thành lợi thế cạnh tranh quyết định giữa các quốc gia, các tổ chức
                và từng cá nhân. Trong dòng chảy đó, đất nước ta cũng đang trong hành trình hội nhập
                sâu rộng, đặt ra yêu cầu ngày càng cao về một thế hệ nhân lực vừa vững nền tảng, vừa
                đủ bản lĩnh để thích ứng với những thay đổi liên tục của thời cuộc.
              </p>
              <p>
                Trong tiến trình hội nhập đó, công nghệ và ngôn ngữ nổi lên như hai năng lực nền tảng
                không thể tách rời. Công nghệ đang tái định hình cách con người làm việc, học tập và
                tạo ra giá trị; ngôn ngữ là cây cầu để tiếp cận tri thức, kết nối con người và mở ra
                cơ hội vượt ra ngoài biên giới quen thuộc. Ai làm chủ được cả hai sẽ có lợi thế vững
                vàng trên hành trình hội nhập cùng thế giới.
              </p>
              <p>
                Chính từ bối cảnh đó, Hồng Lĩnh Education ra đời với mong muốn góp phần chuẩn bị cho
                người học một hành trang thực chất trước những đòi hỏi của thời đại — không chỉ là
                kiến thức, mà là tư duy, năng lực và sự chủ động cần thiết để mỗi cá nhân có thể tự
                tin khẳng định vị trí của mình, dù trong bối cảnh trong nước hay trên sân chơi toàn
                cầu.
              </p>
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* Tầm nhìn & Sứ mệnh */}
      <section className="bg-gradient-to-b from-primary-light/40 via-white to-primary-light/30 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 md:px-6 md:space-y-20">
          <div>
            <SectionTitle title="Tầm nhìn" />
            <div className="mt-10">
              <FeatureBlock
                title="Giáo dục kiến tạo năng lực thích ứng"
                image="/hle/vision.jpg"
                imageAlt="Tầm nhìn Hồng Lĩnh Education"
                reverse
              >
                <p>
                  Thế giới đang thay đổi nhanh hơn bất kỳ giai đoạn nào trong lịch sử. Trong bối cảnh
                  đó, giáo dục không còn là nơi truyền đạt kiến thức có sẵn, mà phải là nơi kiến tạo
                  năng lực thích ứng.
                </p>
                <p>
                  Hồng Lĩnh Education hướng tới trở thành tổ chức giáo dục kiến tạo thế hệ công dân
                  toàn cầu — những con người có nền tảng tri thức vững chắc, tư duy độc lập và năng
                  lực thích ứng để tự tin vươn ra thế giới, dù thế giới đó vận động theo hướng nào.
                </p>
              </FeatureBlock>
            </div>
          </div>

          <div>
            <SectionTitle title="Sứ mệnh" />
            <div className="mt-10">
              <FeatureBlock
                title="Chương trình chất lượng — lấy người học làm trung tâm"
                image="/hle/mission.jpg"
                imageAlt="Sứ mệnh Hồng Lĩnh Education"
              >
                <p>
                  Hồng Lĩnh Education theo đuổi sứ mệnh mang đến những chương trình giáo dục chất
                  lượng cao, được thiết kế bài bản và không ngừng cập nhật, để trang bị cho người học
                  không chỉ kiến thức mà cả tư duy, kỹ năng và bản lĩnh cần thiết để chủ động trước
                  mọi biến động.
                </p>
                <p>
                  Chúng tôi cam kết lấy người học làm trung tâm và lấy năng lực thực chất làm thước
                  đo, để mỗi học viên khi rời khỏi chương trình đều mang theo sự tự tin và hành trang
                  thật sự cho hành trình phía trước.
                </p>
              </FeatureBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Giá trị cốt lõi"
            subtitle="Nền tảng định hướng mọi chương trình và hành trình đồng hành cùng người học"
          />

          <div className="mt-10 overflow-hidden rounded-[18px] border-[5px] border-primary bg-primary p-1 shadow-lg">
            <img
              src="/hle/cover.jpg"
              alt="Giá trị cốt lõi Hồng Lĩnh Education"
              className="aspect-[21/9] w-full rounded-[14px] object-cover sm:aspect-[3/1]"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-primary/15 bg-primary-light/40 p-5 transition hover:border-primary/30 hover:bg-primary-light/70 sm:p-6"
              >
                <h3 className="text-lg font-extrabold text-primary">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đối tác & mạng lưới */}
      <section className="bg-gradient-to-b from-primary-light/40 via-white to-primary-light/30 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            title="Đối tác hợp tác & mạng lưới doanh nghiệp"
            subtitle="Học thuật vững chắc — kết nối thực tiễn — mở rộng cơ hội nghề nghiệp"
          />

          <div className="mt-12 space-y-16 md:space-y-20">
            <FeatureBlock
              title="Đối tác học thuật và tổ chức uy tín"
              image="/hle/intro.jpg"
              imageAlt="Đối tác học thuật Hồng Lĩnh Education"
            >
              <p>
                Hồng Lĩnh Education chủ động ký kết hợp tác với các đối tác học thuật và tổ chức đầu
                ngành như Trung tâm Đổi mới sáng tạo Quốc gia (NIC) và Đại học Bách khoa Hà Nội
                (HUST). Sự đồng hành này giúp chương trình đào tạo được xây dựng trên nền tảng học
                thuật vững chắc, được kiểm chứng bởi các đơn vị chuyên môn uy tín, và liên tục cập
                nhật theo chuẩn mực thực tế của lĩnh vực đào tạo.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <BrandLogo brand="nic" alt="NIC" className="h-12 w-auto object-contain" />
                <BrandLogo brand="hust" alt="HUST" className="h-12 w-auto object-contain" />
              </div>
            </FeatureBlock>

            <FeatureBlock
              title="Mạng lưới quan hệ doanh nghiệp"
              image="/baochung/mou.jpg"
              imageAlt="Mạng lưới doanh nghiệp Hồng Lĩnh Education"
              reverse
            >
              <p>
                Song song với hợp tác học thuật, Hồng Lĩnh Education không ngừng mở rộng mạng lưới
                kết nối với cộng đồng doanh nghiệp. Mạng lưới này đóng vai trò là cầu nối để người
                học tiếp cận môi trường thực hành thực tế, tham gia các dự án gắn với nhu cầu doanh
                nghiệp, và mở ra cơ hội nghề nghiệp ngay từ trong quá trình học tập — thu hẹp khoảng
                cách giữa những gì được học và những gì thị trường lao động thực sự cần.
              </p>
            </FeatureBlock>
          </div>
        </div>
      </section>
    </>
  )
}
