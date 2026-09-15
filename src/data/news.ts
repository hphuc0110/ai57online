export interface NewsSection {
  heading?: string
  paragraphs: string[]
}

export interface NewsItem {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  sections: NewsSection[]
}

export const newsItems: NewsItem[] = [
  {
    slug: 'google-khoi-sac-dau-thang-9',
    title: 'Google khởi sắc đầu tháng 9 sau chuỗi giảm điểm dài nhất thập kỷ',
    excerpt:
      'Cổ phiếu Alphabet đã lấy lại đà tăng trưởng trong tuần đầu tháng 9, sau chuỗi giảm điểm theo tháng dài nhất trong hơn một thập kỷ, nhờ động thái đồng thời trên sản phẩm, thương mại và pháp lý.',
    date: '2026-09-05',
    category: 'Thị trường',
    coverImage: '/images/news/1.png',
    sections: [
      {
        paragraphs: [
          'Cổ phiếu Alphabet, công ty mẹ của Google, đã lấy lại đà tăng trưởng trong tuần đầu tháng 9, sau khi trải qua chuỗi giảm điểm theo tháng dài nhất trong hơn một thập kỷ. Sự phục hồi này đến từ một loạt động thái gần như diễn ra đồng thời trên ba mặt trận: sản phẩm, thương mại và pháp lý.',
        ],
      },
      {
        heading: 'Nguyên nhân của đợt suy giảm kéo dài',
        paragraphs: [
          'Đà giảm điểm trước đó bắt nguồn từ ba yếu tố cộng hưởng: giới đầu tư lo ngại Google đang tụt lại phía sau trong cuộc đua mô hình AI so với các đối thủ; công ty chứng kiến một số nhân sự cấp cao rời đi trong mùa hè; và bộ phận nghiên cứu DeepMind trải qua một đợt tái cơ cấu tổ chức quy mô đáng kể. Ba yếu tố này đã bào mòn niềm tin của thị trường suốt nhiều tuần liền, bất chấp nền tảng kinh doanh cốt lõi của công ty vẫn duy trì ổn định.',
        ],
      },
      {
        heading: 'Bước ngoặt trong tháng 9',
        paragraphs: [
          'Tình hình thay đổi rõ rệt khi bước sang tháng 9. Ngay trong tuần đầu tiên, Google công bố Gemini 3.8 Flash — phiên bản Flash thứ ba được ra mắt chỉ trong sáu tuần, tốc độ cập nhật sản phẩm được giới quan sát đánh giá là chưa từng có tiền lệ đối với công ty này. Đi kèm là một mô hình chuyên biệt cho lĩnh vực an ninh mạng, nhắm đến nhóm khách hàng chính phủ và doanh nghiệp có yêu cầu bảo mật cao.',
          'Trên mặt trận thương mại, nền tảng Gemini Enterprise cũng được cải tổ đáng kể: bổ sung hình thức tính phí theo mức sử dụng thực tế, chiết khấu giá token lên tới 20%, giới hạn chi tiêu hằng tháng cho các tác vụ do AI agent thực hiện, và ra mắt một gói đăng ký cơ bản miễn phí. Giới phân tích nhận định đây là chiến lược giá được thiết kế nhắm thẳng vào Microsoft.',
        ],
      },
      {
        heading: 'Những tín hiệu tích cực khác',
        paragraphs: [
          'Góp thêm vào chuỗi tin tốt, Berkshire Hathaway — thông qua CEO Greg Abel — đã công khai bày tỏ niềm tin vào vị thế AI của Alphabet. Cùng thời điểm, một thẩm phán liên bang đã bác bỏ yêu cầu của Bộ Tư pháp Mỹ buộc Google phải thoái vốn mảng sàn giao dịch quảng cáo, đánh dấu một chiến thắng pháp lý quan trọng khác cho công ty trong cuộc chiến chống độc quyền kéo dài nhiều năm qua.',
        ],
      },
    ],
  },
  {
    slug: 'sam-altman-openai-robot-hinh-nguoi',
    title: 'Sam Altman xác nhận OpenAI đang phát triển robot hình người',
    excerpt:
      'CEO OpenAI lần đầu xác nhận công khai công ty sẽ tự sản xuất robot hình người — bước chuyển so với chiến lược trước đây chỉ cung cấp "trí não" AI cho các hãng robot khác.',
    date: '2026-09-06',
    category: 'Robotics',
    coverImage: '/images/news/2.png',
    sections: [
      {
        paragraphs: [
          'CEO OpenAI Sam Altman lần đầu tiên xác nhận công khai rằng công ty sẽ tự sản xuất robot hình người, đánh dấu một bước chuyển định hướng so với chiến lược trước đây — vốn chỉ tập trung cung cấp phần "trí não" AI cho các hãng robot khác.',
          'Phát biểu được đưa ra trong một cuộc phỏng vấn podcast, khi người dẫn chương trình hỏi thẳng liệu mảng robotics của OpenAI sẽ tập trung vào robot hình người hay các thiết bị chuyên dụng cho trung tâm dữ liệu. Altman trả lời dứt khoát rằng công ty "chắc chắn sẽ làm robot hình người", đồng thời cho biết OpenAI sẽ theo đuổi song song nhiều dạng phần cứng khác. Đây là lần đầu tiên ông xác nhận rõ ràng đến vậy về định hướng phần cứng của công ty.',
          'Đáng chú ý, Altman nhấn mạnh rằng việc chế tạo phần cứng — tức "cơ thể" của robot — ít quan trọng hơn nhiều so với việc xây dựng một hệ thống AI đủ thông minh để điều khiển robot một cách hiệu quả và an toàn trong môi trường thực tế. Quan điểm này phản ánh triết lý xuyên suốt của OpenAI: ưu tiên đầu tư vào "bộ não" AI hơn là phần cơ khí.',
          'Sự chuyển hướng này càng đáng chú ý khi đặt trong bối cảnh lịch sử. OpenAI từng hợp tác với Figure AI từ tháng 2/2024, kết hợp mô hình ngôn ngữ của mình với phần cứng robot của đối tác. Tuy nhiên, mối quan hệ này chấm dứt chỉ một năm sau đó, khi CEO Figure AI tuyên bố công ty đã tự phát triển thành công một hệ thống AI hoàn chỉnh "từ đầu đến cuối" cho robot của mình, đồng thời cho rằng việc tách rời trí tuệ AI khỏi phần cơ thể vật lý là không hiệu quả về mặt kỹ thuật.',
        ],
      },
    ],
  },
  {
    slug: 'robot-openai-chinh-thuc-hay-don-doan',
    title: 'Robot hình người của OpenAI — đã chính thức hay vẫn chỉ là đồn đoán?',
    excerpt:
      'Phân tích chỉ ra khoảng cách giữa phát ngôn của Sam Altman về robot hình người và một sản phẩm thực sự sẵn sàng thương mại hóa, đồng thời cảnh báo thận trọng trước các tiêu đề mang tính suy diễn.',
    date: '2026-09-07',
    category: 'Robotics',
    coverImage: '/images/news/3.png',
    sections: [
      {
        paragraphs: [
          'Một bài phân tích chuyên sâu vừa được công bố đã chỉ ra khoảng cách giữa phát ngôn của Sam Altman về robot hình người và một sản phẩm thực sự sẵn sàng thương mại hóa, đồng thời cảnh báo độc giả nên thận trọng trước các tiêu đề tin tức mang tính suy diễn.',
          'Theo bài viết, phát biểu "chắc chắn sẽ làm robot hình người" của Altman là một cam kết chiến lược thật sự từ cấp lãnh đạo cao nhất, nhưng vẫn còn cách rất xa một thông báo ra mắt sản phẩm cụ thể với ngày tháng, thông số kỹ thuật hay giá bán. Tác giả lưu ý rằng chưa có bất kỳ chi tiết nào ở mức độ đó được công bố chính thức.',
        ],
      },
      {
        heading: 'Diễn biến kéo dài gần hai năm',
        paragraphs: [
          'Bài viết truy lại toàn bộ diễn biến câu chuyện, cho thấy nó không bắt đầu từ tháng 9/2026 mà từ 19 tháng trước — thời điểm mối quan hệ đối tác giữa OpenAI và Figure AI đổ vỡ. Hai công ty từng công bố hợp tác vào tháng 2/2024, kết hợp khả năng suy luận ngôn ngữ tự nhiên của OpenAI với phần cứng robot của Figure. Nhưng đến tháng 2/2025, CEO Figure AI tuyên bố công ty đã đạt "đột phá lớn" trong việc tự phát triển AI cho robot hoàn toàn nội bộ, lập luận rằng AI hiện thân không thể phát triển hiệu quả nếu tách rời khỏi phần cứng.',
        ],
      },
      {
        heading: 'Ba câu hỏi còn bỏ ngỏ',
        paragraphs: [
          'Tác giả nêu ra ba vấn đề lớn chưa có lời giải đối với tham vọng robot của OpenAI:',
          '1. Công ty hiện chưa công khai bất kỳ đối tác nào về sản xuất linh kiện chấp hành, cảm biến hay dây chuyền lắp ráp — những yếu tố bắt buộc để sản xuất phần cứng ở quy mô lớn.',
          '2. Tồn tại mâu thuẫn nội bộ chưa được giải quyết giữa tham vọng làm robot dân dụng và các hợp đồng quốc phòng hiện tại của công ty, từng khiến một nhân sự phụ trách mảng này từ chức.',
          '3. Phản ứng của Figure và các công ty robot khác — vốn từng là đối tác nay có thể trở thành đối thủ cạnh tranh trực tiếp — vẫn là một ẩn số đáng theo dõi.',
        ],
      },
    ],
  },
  {
    slug: 'nvidia-loi-the-tu-chip-sang-von',
    title: 'Lợi thế cạnh tranh của Nvidia đang chuyển từ chip sang vốn',
    excerpt:
      'Thay vì chỉ dựa vào ưu thế công nghệ chip, Nvidia đang tận dụng sức mạnh tài chính như công cụ chiến lược mới để duy trì vị thế dẫn đầu trong ngành AI.',
    date: '2026-09-08',
    category: 'Thị trường',
    coverImage: '/images/news/4.png',
    sections: [
      {
        paragraphs: [
          'Thay vì chỉ dựa vào ưu thế công nghệ chip thuần túy, Nvidia đang tận dụng chính sức mạnh tài chính của mình như một công cụ chiến lược mới, nhằm duy trì và mở rộng vị thế dẫn đầu trong ngành công nghiệp AI, giữa lúc áp lực cạnh tranh từ nhiều đối thủ ngày càng gia tăng.',
          'Chỉ trong vòng một tuần, Nvidia đã công bố hai động thái tài chính đáng chú ý: một thỏa thuận tài trợ trị giá 500 tỷ USD cùng các định chế tài chính hàng đầu Phố Wall, nhằm hỗ trợ khách hàng doanh nghiệp mua sắm chip AI; và một cam kết hỗ trợ tài chính cho OpenAI lên tới 105 tỷ USD, phục vụ dự án hạ tầng trung tâm dữ liệu tại bang Ohio. Giới phân tích xem đây là cách để công nghệ của Nvidia tiếp tục thâm nhập sâu hơn vào thị trường, trong bối cảnh cạnh tranh ngày càng khốc liệt.',
        ],
      },
      {
        heading: 'Áp lực từ mọi phía',
        paragraphs: [
          'Áp lực đó thể hiện rõ qua các số liệu gần đây. Google đã bắt đầu ghi nhận doanh thu từ việc bán ra bộ vi xử lý TPU tự phát triển, đóng góp đáng kể vào mức tăng trưởng 82% của mảng điện toán đám mây trong quý gần nhất. Trong khi đó, AMD báo cáo mảng kinh doanh trung tâm dữ liệu tăng trưởng hơn 100% so với cùng kỳ, với hệ thống rack-scale đầu tiên mang tên Helios dự kiến xuất xưởng vào cuối năm nay.',
          'Một chuyên gia phân tích công nghệ nhận định rằng sự cạnh tranh gia tăng từ cả Google, AMD lẫn các nhà sản xuất chip chuyên dụng như Cerebras đang dần bào mòn biên lợi nhuận vượt trội mà Nvidia từng tận hưởng trong nhiều năm qua. Điều này buộc công ty phải chủ động đa dạng hóa chiến lược kinh doanh — không chỉ bán chip đơn thuần mà còn mở rộng sang vai trò nhà cung cấp tài chính, đối tác chiến lược cho toàn bộ hệ sinh thái AI.',
        ],
      },
    ],
  },
  {
    slug: 'nvidia-tang-hon-10-phan-tram',
    title: 'Nvidia tăng hơn 10% trong tuần khi nỗi lo "bong bóng AI" hạ nhiệt',
    excerpt:
      'Cổ phiếu Nvidia phục hồi mạnh mẽ chỉ một tuần sau đợt bán tháo do lo ngại định giá ngành bán dẫn AI, nhờ thông tin bất ngờ từ SpaceX.',
    date: '2026-09-09',
    category: 'Thị trường',
    coverImage: '/images/news/5.png',
    sections: [
      {
        paragraphs: [
          'Cổ phiếu Nvidia đã phục hồi mạnh mẽ chỉ một tuần sau đợt bán tháo do lo ngại định giá ngành bán dẫn AI đã vượt quá xa so với nền tảng tài chính thực tế, nhờ một thông tin bất ngờ từ SpaceX.',
        ],
      },
      {
        heading: 'Áp lực bán tháo lan rộng',
        paragraphs: [
          'Trước đó, nhóm cổ phiếu bán dẫn nói chung đã chịu áp lực bán mạnh trong suốt một tuần, khi giới đầu tư bắt đầu hoài nghi liệu làn sóng đầu tư ồ ạt vào hạ tầng AI toàn cầu có thực sự được hỗ trợ bởi nhu cầu và doanh thu tương xứng, hay chỉ đơn thuần là một đợt tăng trưởng nóng thiếu nền tảng vững chắc. Tâm lý thận trọng này đã lan rộng ra toàn ngành, kéo giá cổ phiếu Nvidia đi xuống cùng các đối thủ.',
        ],
      },
      {
        heading: 'SpaceX đảo chiều tâm lý thị trường',
        paragraphs: [
          'Tuy nhiên, tâm lý thị trường nhanh chóng chuyển sang tích cực chỉ vài ngày sau đó. Chất xúc tác chính đến từ SpaceX: trong buổi báo cáo kết quả kinh doanh đầu tiên của công ty, Elon Musk công bố kế hoạch xây dựng các trung tâm dữ liệu không chỉ trên mặt đất mà còn ngay trong không gian, sử dụng hoàn toàn chip của Nvidia — cụ thể là hệ thống rack-scale NVL72 dựa trên nền tảng thế hệ mới Vera Rubin, với các phiên bản được điều chỉnh để phóng lên quỹ đạo quanh Trái Đất.',
          'Nhờ động lực này, Nvidia đã khép lại tuần giao dịch với mức tăng ấn tượng hơn 10%, bất chấp một báo cáo trước đó từ hãng nghiên cứu The Information cho biết Nvidia đang cân nhắc giảm dung lượng bộ nhớ băng thông cao trên dòng chip Rubin Ultra sắp ra mắt, do tình trạng thiếu hụt bộ nhớ mang tính toàn cầu — một rủi ro chuỗi cung ứng vẫn còn treo lơ lửng phía trước.',
        ],
      },
    ],
  },
  {
    slug: 'my-cao-buoc-alibaba-deepseek',
    title: 'Mỹ cáo buộc Alibaba, DeepSeek "đánh cắp có hệ thống" công nghệ AI',
    excerpt:
      'Ba cơ quan an ninh hàng đầu Mỹ đồng loạt cáo buộc các công ty AI Trung Quốc khai thác trái phép công nghệ Mỹ ở quy mô công nghiệp, đúng trước thềm thượng đỉnh Mỹ – Trung.',
    date: '2026-09-10',
    category: 'Địa chính trị',
    coverImage: '/images/news/6.png',
    sections: [
      {
        paragraphs: [
          'Ba cơ quan an ninh hàng đầu của Mỹ vừa đồng loạt cáo buộc các công ty AI Trung Quốc khai thác trái phép công nghệ Mỹ ở quy mô công nghiệp, đúng vào thời điểm nhạy cảm trước thềm cuộc gặp thượng đỉnh Mỹ – Trung.',
        ],
      },
      {
        heading: 'Cáo buộc "chưng cất mô hình" ở quy mô công nghiệp',
        paragraphs: [
          'Trong một tuyên bố chung công bố vào thứ Ba, Cơ quan An ninh Quốc gia (NSA), Cục Điều tra Liên bang (FBI) và Cơ quan An ninh mạng và Cơ sở hạ tầng (CISA) cáo buộc một loạt công ty công nghệ Trung Quốc — bao gồm DeepSeek, Moonshot AI, Alibaba, MiniMax, StepFun và Z.AI — đã sử dụng kỹ thuật "chưng cất mô hình" kể từ ít nhất năm 2024, nhằm khai thác và trích xuất tri thức từ các hệ thống AI của Mỹ ở quy mô mà các cơ quan này mô tả là "công nghiệp".',
          'Theo tuyên bố, kỹ thuật chưng cất cho phép một mô hình AI "học lại" từ đầu ra của một mô hình khác mà không cần truy cập trực tiếp vào dữ liệu huấn luyện gốc hay kiến trúc nội bộ. Đây vốn là phương pháp phổ biến trong nghiên cứu AI, nhưng bị cáo buộc đã được sử dụng với mục đích và quy mô mang tính hệ thống, vượt ra ngoài phạm vi nghiên cứu thông thường. Các cơ quan an ninh Mỹ khuyến cáo giới phát triển công nghệ tại Thung lũng Silicon cần chủ động áp dụng các biện pháp bảo vệ chặt chẽ hơn đối với thành quả nghiên cứu và mô hình của mình.',
        ],
      },
      {
        heading: 'Thời điểm nhạy cảm về ngoại giao',
        paragraphs: [
          'Diễn biến này đặc biệt được chú ý về mặt thời điểm: tuyên bố được đưa ra chỉ vài tuần trước khi Tổng thống Mỹ dự kiến tiếp đón Chủ tịch Trung Quốc tại Washington trong khuôn khổ một hội nghị cấp cao song phương, khiến câu chuyện công nghệ này gắn chặt thêm với bối cảnh ngoại giao và cạnh tranh chiến lược giữa hai nền kinh tế lớn nhất thế giới.',
        ],
      },
    ],
  },
  {
    slug: 'trung-quoc-tung-loat-mo-hinh-ma-nguon-mo',
    title: 'Trung Quốc tung loạt mô hình mã nguồn mở, khiến các hãng AI Mỹ lo ngại',
    excerpt:
      'Chỉ trong vài ngày, hai công ty công nghệ hàng đầu Trung Quốc liên tiếp ra mắt các mô hình AI mới, đẩy cuộc đua mã nguồn mở toàn cầu lên một nấc thang mới.',
    date: '2026-09-11',
    category: 'Công nghệ',
    coverImage: '/images/news/7.png',
    sections: [
      {
        paragraphs: [
          'Chỉ trong vài ngày, hai công ty công nghệ hàng đầu Trung Quốc liên tiếp ra mắt các mô hình AI mới, đẩy cuộc đua mã nguồn mở toàn cầu lên một nấc thang mới.',
        ],
      },
      {
        heading: 'Qwen3.8-Max: mô hình lớn nhất của Alibaba',
        paragraphs: [
          'Alibaba chính thức giới thiệu Qwen3.8-Max, mô hình lớn nhất từ trước đến nay của hãng với 2,4 nghìn tỷ tham số, sử dụng kiến trúc "hỗn hợp chuyên gia" — chỉ khoảng 95 tỷ tham số được kích hoạt cho mỗi tác vụ, giúp giảm đáng kể chi phí tính toán và độ trễ phản hồi so với việc kích hoạt toàn bộ mô hình. Mô hình này được đánh giá có năng lực ngang ngửa các sản phẩm hàng đầu của OpenAI và Anthropic, hỗ trợ xử lý đồng thời văn bản, hình ảnh và video, với cửa sổ ngữ cảnh lên tới một triệu token. Theo Alibaba, mô hình này thậm chí đã hoàn thành một dự án phát triển phần mềm kéo dài 16 ngày một cách tự động.',
        ],
      },
      {
        heading: 'DeepSeek chọn hướng đi khác: tối ưu chi phí',
        paragraphs: [
          'Chỉ vài ngày trước đó, DeepSeek cũng phát hành mô hình V4-Flash với cách tiếp cận hoàn toàn khác biệt: thay vì chạy đua thuần túy về quy mô tham số, hãng tối ưu hóa hiệu năng trên một số lượng tham số nhỏ hơn nhiều — 284 tỷ tham số tổng, trong đó chỉ 13 tỷ được kích hoạt khi suy luận — giúp mô hình có thể vừa gọn trong khoảng 142 GB bộ nhớ GPU.',
          'Theo đơn vị nghiên cứu benchmark độc lập Artificial Analysis, V4-Flash đạt hiệu năng gần tương đương mô hình phổ thông giá rẻ của OpenAI, nhưng với chi phí vận hành thấp hơn khoảng 40%, cụ thể ở mức 0,14 USD cho mỗi triệu token đầu vào và 0,28 USD cho mỗi triệu token đầu ra. Diễn biến này cho thấy "mặt trận" cạnh tranh mới của ngành AI Trung Quốc đã dịch chuyển từ việc chạy đua sức mạnh thuần túy sang bài toán cân bằng giữa hiệu năng, quy mô và chi phí vận hành thực tế cho doanh nghiệp.',
        ],
      },
    ],
  },
  {
    slug: 'qwen-alibaba-vuot-meta-google',
    title: 'Mô hình mã nguồn mở Qwen của Alibaba vượt Meta, Google về quy mô toàn cầu',
    excerpt:
      'Báo cáo từ Hugging Face cho thấy các phòng thí nghiệm AI Trung Quốc liên tục dẫn đầu về quy mô mô hình mã nguồn mở trong suốt năm 2026.',
    date: '2026-09-11',
    category: 'Công nghệ',
    coverImage: '/images/news/8.png',
    sections: [
      {
        paragraphs: [
          'Một báo cáo từ nền tảng Hugging Face cho thấy các phòng thí nghiệm AI Trung Quốc liên tục dẫn đầu về quy mô mô hình mã nguồn mở trong suốt năm 2026, đánh dấu một bước ngoặt đáng chú ý trong cán cân công nghệ toàn cầu — vốn từ lâu được mặc định nghiêng về phía các tập đoàn công nghệ Mỹ.',
        ],
      },
      {
        heading: 'Khoảng cách về quy mô tham số ngày càng rõ rệt',
        paragraphs: [
          'Theo dữ liệu được trích dẫn trong báo cáo, gần như mỗi tháng trong năm 2026, mô hình mã nguồn mở lớn và mạnh nhất do một phòng thí nghiệm Trung Quốc phát hành đều có quy mô tham số vượt trội so với mô hình tương ứng tốt nhất từ một phòng thí nghiệm Mỹ. Cụ thể, "mức trần" quy mô tham số của Trung Quốc trong các tháng được khảo sát dao động từ khoảng 754 tỷ đến 2,78 nghìn tỷ tham số, trong khi "mức trần" của Mỹ trong 5 trên 7 tháng được khảo sát vẫn ở dưới ngưỡng 130 tỷ tham số — một khoảng cách không hề nhỏ nếu tính theo đơn vị tuyệt đối.',
        ],
      },
      {
        heading: 'Không chỉ Qwen mà là cả một hệ sinh thái',
        paragraphs: [
          'Giới quan sát trong ngành nhận định rằng sự vươn lên của Qwen — cùng các mô hình khác như Kimi K3 của Moonshot AI, các phiên bản của DeepSeek, và GLM-5.3 của Zhipu AI — cho thấy chiến lược "giá rẻ, dễ tùy biến, mở mã nguồn" của Trung Quốc đang được cộng đồng lập trình viên toàn cầu đón nhận rộng rãi, chứ không chỉ dừng lại ở một hiện tượng đơn lẻ. Điều này phản ánh một bước chuyển mang tính cấu trúc: ngành AI Trung Quốc dường như không còn chỉ ở vị thế "đuổi kịp" phương Tây như nhiều năm trước, mà đang dần có khả năng "đặt chuẩn" cho toàn bộ hệ sinh thái mã nguồn mở thế giới — nơi các nhà phát triển độc lập, startup và cả doanh nghiệp lớn ngày càng có xu hướng lựa chọn các mô hình mở này làm nền tảng xây dựng sản phẩm.',
        ],
      },
      {
        heading: 'Kiểm soát xuất khẩu của Mỹ chưa cho thấy hiệu quả rõ rệt',
        paragraphs: [
          'Bài báo cũng đề cập đến việc các biện pháp kiểm soát xuất khẩu công nghệ của Mỹ — bao gồm việc tạm ngừng quyền truy cập quốc tế đối với mô hình Claude Fable 5 của Anthropic hồi mùa hè 2026 — dường như chưa làm chậm lại đáng kể đà phát triển của các đối thủ Trung Quốc. Trong khi các biện pháp hạn chế nhắm tới việc làm chậm khả năng tiếp cận công nghệ tiên tiến, các công ty Trung Quốc vẫn tiếp tục ra mắt các mô hình nền tảng mới với tần suất dày đặc, đặt ra câu hỏi về hiệu quả thực sự của chính sách kiểm soát công nghệ trong bối cảnh cạnh tranh AI toàn cầu hiện nay.',
        ],
      },
    ],
  },
  {
    slug: 'cuoc-dua-ai-trung-quoc-chi-phi-van-hanh',
    title: 'Cuộc đua AI Trung Quốc chuyển sang "mặt trận" chi phí vận hành',
    excerpt:
      'Các công ty công nghệ Trung Quốc giờ đây cạnh tranh khốc liệt trên mặt trận chi phí vận hành AI cho doanh nghiệp — yếu tố quyết định khả năng thương mại hóa quy mô lớn.',
    date: '2026-09-12',
    category: 'Công nghệ',
    coverImage: '/images/news/9.png',
    sections: [
      {
        paragraphs: [
          'Không chỉ chạy đua thuần túy về sức mạnh mô hình, các công ty công nghệ Trung Quốc giờ đây đang cạnh tranh khốc liệt trên một mặt trận mới và mang tính thực tiễn hơn nhiều: bài toán chi phí vận hành AI cho doanh nghiệp — yếu tố quyết định trực tiếp khả năng thương mại hóa quy mô lớn.',
        ],
      },
      {
        heading: 'Cạnh tranh nội địa ngày càng khốc liệt',
        paragraphs: [
          'Việc Alibaba ra mắt Qwen3.8-Max diễn ra giữa lúc cạnh tranh nội địa tại Trung Quốc ngày càng gay gắt, đặc biệt đến từ Moonshot AI với mô hình Kimi K3 có quy mô lên tới 2,8 nghìn tỷ tham số — chỉ nhỉnh hơn đôi chút so với Qwen3.8-Max. Trong khi đó, DeepSeek, vốn đã gây chấn động thị trường công nghệ toàn cầu năm trước với chiến lược chi phí thấp, tiếp tục củng cố vị thế "người dẫn đầu về giá" khi ra mắt mô hình V4-Flash chỉ vài ngày trước sự kiện của Alibaba, cho thấy nhịp độ ra mắt sản phẩm trong ngành đang được đẩy lên mức chưa từng có.',
        ],
      },
      {
        heading: 'Chi phí cho mỗi bài kiểm tra: thước đo mới của cuộc đua',
        paragraphs: [
          'Theo ước tính của đơn vị nghiên cứu benchmark độc lập Artificial Analysis, chi phí trung bình để hoàn thành một bài kiểm tra chuẩn trên V4-Flash chỉ vào khoảng 0,03 USD — thấp hơn đáng kể so với các đối thủ cùng phân khúc. Để so sánh, Kimi K3 của Moonshot ước tính tiêu tốn khoảng 0,86 USD mỗi bài kiểm tra, mô hình phổ thông GPT-5.6 của OpenAI ở mức khoảng 1,86 USD, còn Claude Fable 5 của Anthropic lên tới 3,15 USD — một khoảng cách hàng chục lần giữa mô hình rẻ nhất và đắt nhất trong danh sách so sánh.',
        ],
      },
      {
        heading: 'Vì sao chỉ số này quan trọng hơn giá niêm yết',
        paragraphs: [
          'Đơn vị nghiên cứu này lập luận rằng chỉ số chi phí tính theo mỗi bài kiểm tra phản ánh thực tế sát hơn nhiều so với việc chỉ so sánh mức giá niêm yết trên mỗi triệu token, bởi nó đã tính đến cả khối lượng dữ liệu mà mô hình cần xử lý và tạo ra để hoàn thành trọn vẹn một tác vụ. Nói cách khác, một mô hình có giá niêm yết thấp nhưng lại cần nhiều bước suy luận, nhiều token trung gian hơn để đi đến kết quả cuối cùng, vẫn có thể tốn kém hơn trong thực tế sử dụng so với một mô hình giá niêm yết cao hơn nhưng xử lý hiệu quả, gọn gàng hơn. Đây được xem là lý do vì sao các doanh nghiệp ngày càng chú trọng đến chỉ số này khi lựa chọn mô hình để triển khai ở quy mô sản xuất.',
        ],
      },
    ],
  },
  {
    slug: 'tong-hop-tin-robot-hinh-nguoi-thang-9',
    title: 'Tổng hợp tin robot hình người tháng 9/2026: từ trình diễn đến thương mại hóa',
    excerpt:
      'Ngành robot hình người toàn cầu tăng tốc mạnh trong tháng 9, với dấu ấn từ sự kiện lớn lẫn bước tiến về sản lượng thương mại thực tế.',
    date: '2026-09-15',
    category: 'Robotics',
    coverImage: '/images/news/10.png',
    sections: [
      {
        paragraphs: [
          'Ngành công nghiệp robot hình người toàn cầu tiếp tục tăng tốc mạnh mẽ trong tháng 9, với dấu ấn từ các sự kiện lớn mang tính biểu tượng lẫn những bước tiến quan trọng về sản lượng thương mại thực tế — cho thấy ngành này đang dần chuyển từ giai đoạn trình diễn công nghệ sang giai đoạn triển khai ở quy mô lớn hơn.',
        ],
      },
      {
        heading: 'Những cột mốc đáng chú ý trong tháng',
        paragraphs: [
          'Tháng 9/2026 chứng kiến nhiều cột mốc quan trọng của ngành diễn ra gần như song song. Trước hết, sự kiện World Humanoid Robot Games ghi nhận những màn trình diễn khả năng vận động ấn tượng nhất từ trước đến nay, cho thấy tiến bộ rõ rệt về khả năng giữ thăng bằng và di chuyển linh hoạt của robot so với các thế hệ trước. Bên cạnh đó, công ty Unitree đã hoàn tất đợt phát hành cổ phiếu lần đầu ra công chúng trên sàn giao dịch STAR Market tại Thượng Hải vào ngày 19/8, trở thành đợt IPO thuần robot hình người đầu tiên tại Trung Quốc đại lục, với cổ phiếu tăng giá hàng trăm phần trăm ngay trong ngày chào sàn — một tín hiệu cho thấy sự quan tâm mạnh mẽ của thị trường vốn đối với lĩnh vực này. Trong khi đó, AgiBot và Figure AI tiếp tục duy trì vị thế dẫn đầu về sản lượng xuất xưởng thực tế.',
        ],
      },
      {
        heading: 'Ứng dụng thương mại đang dần mở rộng',
        paragraphs: [
          'Về mặt ứng dụng thương mại, robot Figure 03 tiếp tục thực hiện các công việc công nghiệp có trả phí, bao gồm sắp xếp linh kiện tại nhà máy BMW ở Spartanburg cùng nhiều dự án thí điểm logistics khác, với sản lượng đã vượt mốc 1.000 đơn vị — một con số cho thấy quá trình chuyển từ thử nghiệm sang vận hành thực tế đang có tiến triển cụ thể. Đáng chú ý hơn, UBTech đã bắt đầu giao những lô hàng robot đồng hành U1 đầu tiên cho người tiêu dùng vào giữa tháng 9, với hơn 13.000 đơn đặt trước. Khác với hầu hết các sản phẩm khác trong ngành vốn tập trung vào tác vụ công nghiệp hoặc logistics, U1 hướng tới phân khúc robot companion trong gia đình — cho thấy thị trường robot hình người đang bắt đầu phân hóa thành nhiều phân khúc ứng dụng khác nhau.',
        ],
      },
      {
        heading: 'Bức tranh tăng trưởng toàn ngành',
        paragraphs: [
          'Số liệu tổng hợp nửa đầu năm 2026 cho thấy sản lượng robot hình người toàn cầu tăng khoảng 272% so với cùng kỳ năm trước, đạt khoảng 19.000–22.000 đơn vị xuất xưởng — một tốc độ tăng trưởng phản ánh giai đoạn bùng nổ đầu tư và sản xuất của ngành. Các nhà sản xuất Trung Quốc hiện chiếm tới 93–97% thị phần sản lượng toàn cầu, một tỷ lệ áp đảo gần như tuyệt đối, trong khi ứng dụng công nghiệp và thương mại hiện chiếm hơn 70% tổng khối lượng triển khai — cho thấy động lực tăng trưởng chính của ngành hiện nay đến từ nhu cầu thực tế trong sản xuất và logistics, hơn là từ các ứng dụng tiêu dùng còn non trẻ.',
        ],
      },
    ],
  },
  {
    slug: 'toan-canh-nganh-robot-hinh-nguoi-2026',
    title: 'Toàn cảnh ngành robot hình người 2026: khoảng cách giữa lời đồn và thực tế triển khai',
    excerpt:
      'Hơn 140 công ty đang sản xuất robot hình người, nhưng số liệu triển khai thực tế thường bị thổi phồng so với những gì công bố chính thức.',
    date: '2026-09-15',
    category: 'Robotics',
    coverImage: '/images/news/11.png',
    sections: [
      {
        paragraphs: [
          'Hơn 140 công ty trên toàn thế giới hiện đang sản xuất robot hình người, nhưng số liệu triển khai thực tế thường bị thổi phồng đáng kể so với những gì các công ty công bố chính thức, theo một bài phân tích tổng hợp mới được công bố — đặt ra lời cảnh báo về việc cần thận trọng khi tiếp nhận các con số ấn tượng lan truyền trên truyền thông.',
        ],
      },
      {
        heading: 'Bản đồ cạnh tranh: Mỹ dẫn đầu về công nghệ, Trung Quốc áp đảo về sản lượng',
        paragraphs: [
          'Các tên tuổi lớn nhất trong ngành hiện nay bao gồm Tesla với dòng Optimus, Figure AI với mẫu Figure 03, Boston Dynamics với Atlas, Agility Robotics với Digit, cùng nhiều công ty Trung Quốc như Unitree, AgiBot, UBTech, cũng như các tên tuổi mới nổi như 1X Technologies và Neura Robotics. Bức tranh cạnh tranh toàn cầu cho thấy một sự phân hóa rõ rệt: trong khi các công ty Mỹ dẫn đầu về khả năng huy động vốn đầu tư mạo hiểm và nền tảng công nghệ AI-first, các công ty Trung Quốc lại chiếm ưu thế gần như tuyệt đối về sản lượng thực tế, với hơn 80% số lượng robot được lắp đặt trên toàn cầu trong năm 2025 đến từ các nhà sản xuất nước này.',
        ],
      },
      {
        heading: 'Nhà máy sản xuất robot quy mô lớn đầu tiên tại Mỹ',
        paragraphs: [
          'Đáng chú ý, Agility Robotics hiện vận hành nhà máy sản xuất robot hình người quy mô đầu tiên tại Mỹ — có tên RoboFab, đặt tại Salem, bang Oregon — với công suất thiết kế lên tới 10.000 đơn vị mỗi năm, chuyên sản xuất robot Digit phục vụ tự động hóa kho vận. Amazon đã triển khai Digit tại các trung tâm hoàn tất đơn hàng của mình, một trong những trường hợp ứng dụng thực tế quy mô lớn hiếm hoi được xác nhận công khai. Theo tài liệu gửi nhà đầu tư công khai vào tháng 6/2026, Agility định giá dịch vụ Digit theo mô hình robot-as-a-service ở mức khoảng 8.500 USD mỗi tháng cho mỗi đơn vị.',
        ],
      },
      {
        heading: 'Những con số cần được kiểm chứng',
        paragraphs: [
          'Tuy nhiên, một bài phân tích khác lại đặt dấu hỏi nghiêm túc về tính xác thực của những con số triển khai được lan truyền rộng rãi trên truyền thông — chẳng hạn tuyên bố Tesla đã xuất xưởng vượt mốc 50.000 robot Optimus cộng dồn, hay Figure AI đã triển khai hơn 10.000 robot tại các kho hàng đối tác. Theo bài viết, điểm mấu chốt cần lưu ý là không một con số nào trong số này thực sự đến từ báo cáo tài chính chính thức của chính các công ty liên quan, mà phần lớn xuất phát từ các phát ngôn truyền thông, bài đăng mạng xã hội hoặc suy đoán của giới quan sát — điều này cho thấy khoảng cách giữa hình ảnh truyền thông và thực tế triển khai của ngành vẫn còn khá lớn, và người đọc cần thận trọng khi tiếp nhận các số liệu chưa được kiểm chứng độc lập.',
        ],
      },
    ],
  },
  {
    slug: 'sony-warner-kien-anthropic',
    title: 'Sony Music và Warner kiện Anthropic, cáo buộc "chiến dịch đánh cắp bản quyền táo bạo"',
    excerpt:
      'Hai tập đoàn âm nhạc hàng đầu thế giới khởi kiện Anthropic, mở mặt trận pháp lý mới xoay quanh việc dùng nội dung có bản quyền để huấn luyện AI.',
    date: '2026-09-13',
    category: 'Pháp lý',
    coverImage: '/images/news/12.png',
    sections: [
      {
        paragraphs: [
          'Hai tập đoàn âm nhạc hàng đầu thế giới đã chính thức khởi kiện Anthropic, mở ra một mặt trận pháp lý mới xoay quanh việc các công ty AI sử dụng nội dung có bản quyền để huấn luyện mô hình ngôn ngữ — lần này là trong lĩnh vực âm nhạc, sau khi ngành xuất bản sách đã trải qua một cuộc chiến pháp lý tương tự.',
        ],
      },
      {
        heading: 'Nội dung đơn kiện',
        paragraphs: [
          'Đơn kiện được nộp vào tối thứ Sáu tại tòa án liên bang khu vực Bắc California, nhắm vào Anthropic cùng CEO Dario Amodei và đồng sáng lập Benjamin Mann với tư cách cá nhân — một chi tiết đáng chú ý cho thấy mức độ nghiêm trọng mà các nguyên đơn muốn nhấn mạnh. Theo nội dung đơn kiện, Anthropic đã tiến hành một "chiến dịch có hệ thống" nhằm tải trái phép, thu thập dữ liệu và sao chép hàng chục nghìn tác phẩm âm nhạc có bản quyền — bao gồm cả lời bài hát lẫn bản ký âm — thông qua hai kho lưu trữ số không được cấp phép, để phục vụ huấn luyện mô hình Claude. Đơn kiện cũng cáo buộc rằng Claude có khả năng tái tạo lời bài hát gần như nguyên văn khi được người dùng yêu cầu, điều mà phía nguyên đơn xem là bằng chứng cho thấy các tác phẩm gốc đã thực sự được đưa vào dữ liệu huấn luyện.',
        ],
      },
      {
        heading: 'Phản ứng của Anthropic',
        paragraphs: [
          'Đại diện Anthropic đã phản bác các cáo buộc, khẳng định đây là vụ kiện thứ ba dựa trên những lập luận tương tự từ cùng một nhóm luật sư — nhóm từng đại diện cho các nguyên đơn trong vụ kiện Bartz v. Anthropic liên quan đến bản quyền sách trước đó. Công ty tuyên bố sẽ "phản bác mạnh mẽ" trước tòa, đồng thời lập luận rằng việc sử dụng nội dung có bản quyền để huấn luyện AI thuộc phạm vi sử dụng hợp lý theo phán quyết của một thẩm phán trong vụ kiện trước đó. Tuy vậy, đáng chú ý là chính phán quyết đó cũng nêu rõ rằng việc thu thập nội dung thông qua các kênh vi phạm bản quyền là không hợp pháp, bất kể mục đích sử dụng sau đó là gì — một điểm mà phía nguyên đơn trong vụ kiện mới nhiều khả năng sẽ tiếp tục khai thác.',
        ],
      },
      {
        heading: 'Tiền lệ và mức độ rủi ro tài chính',
        paragraphs: [
          'Đây không phải lần đầu Anthropic đối mặt với cáo buộc tương tự. Công ty từng đồng ý dàn xếp vụ kiện bản quyền sách nói trên với mức bồi thường kỷ lục 1,5 tỷ USD vào năm 2025 — một trong những khoản dàn xếp bản quyền lớn nhất trong lịch sử ngành công nghệ. Vụ kiện mới từ Sony/Warner, với mức đòi bồi thường lên tới 150.000 USD cho mỗi tác phẩm bị vi phạm, có khả năng còn tạo ra một tiền lệ pháp lý lớn hơn nữa nếu được xét xử đến cùng, đặc biệt khi xét đến quy mô hàng chục nghìn tác phẩm được đề cập trong đơn kiện.',
        ],
      },
    ],
  },
  {
    slug: 'vu-kien-ban-quyen-anthropic-keo-dai',
    title: 'Vụ kiện bản quyền nhắm vào Anthropic có thể kéo dài nhiều năm',
    excerpt:
      'Giới quan sát nhận định vụ kiện Sony Music và Warner mới chỉ là "phát súng mở màn" cho cuộc chiến pháp lý dài hơi về bản quyền âm nhạc trong kỷ nguyên AI tạo sinh.',
    date: '2026-09-13',
    category: 'Pháp lý',
    coverImage: '/images/news/13.png',
    sections: [
      {
        paragraphs: [
          'Giới quan sát nhận định vụ kiện của Sony Music và Warner mới chỉ là "phát súng mở màn" cho một cuộc chiến pháp lý dài hơi hơn nhiều về bản quyền âm nhạc trong kỷ nguyên AI tạo sinh, với nhiều lớp phức tạp pháp lý còn chưa được giải quyết triệt để.',
        ],
      },
      {
        heading: 'Cấu trúc bản quyền âm nhạc phức tạp hơn nhiều so với văn bản hay hình ảnh',
        paragraphs: [
          'Theo phân tích của các nhà báo chuyên trách mảng truyền thông và giải trí, hệ thống bản quyền âm nhạc vốn có cấu trúc pháp lý phức tạp hơn nhiều so với văn bản hay hình ảnh thông thường — vốn là hai loại nội dung từng là trung tâm của các vụ kiện AI trước đây. Một bài hát thương mại có thể chứa nhiều lớp bản quyền tách biệt: lời bài hát, bản ghi âm, và phần soạn nhạc — mỗi lớp có thể thuộc sở hữu của những chủ thể khác nhau như nghệ sĩ biểu diễn, nhà xuất bản và hãng thu âm. Cấu trúc nhiều lớp này khiến các công ty AI như Anthropic có nguy cơ phải đối mặt với nhiều vụ kiện riêng lẻ cho cùng một bài hát, đến từ những nguyên đơn khác nhau nắm giữ những phần bản quyền khác nhau — thay vì chỉ đối mặt với một vụ kiện duy nhất cho mỗi tác phẩm như thường thấy ở lĩnh vực xuất bản sách.',
        ],
      },
      {
        heading: 'Phạm vi vụ kiện Sony/Warner đặc biệt rộng',
        paragraphs: [
          'Vụ kiện của Sony/Warner được đánh giá là đặc biệt rộng về phạm vi vì nhắm tới hàng chục nghìn tác phẩm cùng lúc, trong khi các vụ kiện tương tự trước đó — chẳng hạn vụ kiện của BMG nhắm vào Anthropic — chỉ tập trung vào khoảng 493 tác phẩm cụ thể. Sự chênh lệch về quy mô này cho thấy mức độ rủi ro tài chính tiềm tàng đối với Anthropic trong vụ kiện mới là lớn hơn đáng kể.',
        ],
      },
      {
        heading: 'Cơ chế bồi thường thiệt hại ấn định theo luật',
        paragraphs: [
          'Việc các bài hát thương mại thường có bản quyền được đăng ký cá nhân hóa rõ ràng cho từng thành phần giúp các nguyên đơn có cơ sở pháp lý vững chắc để đòi bồi thường theo mức thiệt hại ấn định theo luật (statutory damages) — một cơ chế đặc thù của luật bản quyền Mỹ, theo đó nguyên đơn không cần phải chứng minh cụ thể mức thiệt hại tài chính thực tế trước tòa, mà chỉ cần chứng minh hành vi vi phạm để được hưởng mức bồi thường tối thiểu theo quy định pháp luật. Cơ chế này được xem là một trong những lý do khiến rủi ro tài chính từ các vụ kiện bản quyền âm nhạc có thể lớn hơn nhiều so với các loại vụ kiện bản quyền khác.',
        ],
      },
    ],
  },
  {
    slug: 'round-hill-music-kien-suno-anthropic',
    title: 'Round Hill Music kiện Suno và Anthropic, đòi bồi thường tới 1 tỷ USD',
    excerpt:
      'Nhà xuất bản âm nhạc độc lập mở rộng làn sóng kiện tụng bản quyền, nhắm đồng thời vào nền tảng tạo nhạc AI lẫn nhà cung cấp mô hình nền tảng.',
    date: '2026-09-14',
    category: 'Pháp lý',
    coverImage: '/images/news/14.png',
    sections: [
      {
        paragraphs: [
          'Một nhà xuất bản âm nhạc độc lập tiếp tục mở rộng làn sóng kiện tụng bản quyền nhắm vào các công ty AI, lần này nhắm đồng thời vào cả nền tảng tạo nhạc AI lẫn nhà cung cấp mô hình nền tảng đứng sau — một cách tiếp cận pháp lý cho thấy chiến lược kiện tụng trong ngành đang ngày càng mở rộng phạm vi.',
        ],
      },
      {
        heading: 'Nội dung vụ kiện',
        paragraphs: [
          'Round Hill Music đã đệ đơn kiện tại tòa án liên bang California, cáo buộc cả Suno — nền tảng tạo nhạc bằng AI đang gây chú ý trên thị trường — lẫn Anthropic đã thu thập trái phép hàng trăm bài hát thuộc danh mục bản quyền của công ty để huấn luyện mô hình, mà không xin phép hay chi trả phí bản quyền tương ứng. Đây là vụ kiện mới nhất trong một chuỗi các vụ kiện nhắm vào Suno từ cả ba hãng thu âm lớn nhất thế giới — Universal Music Group, Sony Music và Warner Music Group — dù trước đó Suno đã đạt được thỏa thuận dàn xếp riêng với Warner Music Group, cho thấy các bên trong ngành có thể lựa chọn giữa con đường thương lượng hoặc theo đuổi kiện tụng đến cùng tùy vào từng trường hợp cụ thể.',
        ],
      },
      {
        heading: 'Xu hướng mở rộng trách nhiệm pháp lý theo chuỗi cung ứng công nghệ',
        paragraphs: [
          'Việc Round Hill Music đưa cả Anthropic vào chung một vụ kiện với Suno phản ánh một xu hướng đáng chú ý trong chiến lược pháp lý của ngành âm nhạc: các bên nguyên đơn ngày càng mở rộng phạm vi trách nhiệm pháp lý, không chỉ nhắm vào các ứng dụng tạo nội dung trực tiếp tiếp xúc với người dùng cuối như Suno, mà còn cả những công ty cung cấp hạ tầng mô hình nền tảng đứng phía sau như Anthropic. Điều này cho thấy rủi ro pháp lý về bản quyền trong ngành AI tạo sinh đang lan rộng theo cả chiều dọc của chuỗi cung ứng công nghệ — từ lớp ứng dụng cho đến lớp hạ tầng mô hình — thay vì chỉ giới hạn ở những công ty trực tiếp cung cấp sản phẩm cho người dùng.',
        ],
      },
    ],
  },
  {
    slug: 'salesforce-anthropic-claudeforce',
    title: 'Salesforce và Anthropic công bố "ClaudeForce": đưa Claude vào trung tâm hệ sinh thái Slack',
    excerpt:
      'Hai công ty mở rộng hợp tác chiến lược, đưa mô hình Claude trở thành "bộ não" mặc định xuyên suốt nền tảng làm việc Slack.',
    date: '2026-09-12',
    category: 'Doanh nghiệp',
    coverImage: '/images/news/15.png',
    sections: [
      {
        paragraphs: [
          'Hai công ty vừa mở rộng quan hệ hợp tác chiến lược, đưa mô hình Claude trở thành "bộ não" mặc định xuyên suốt toàn bộ nền tảng làm việc Slack — một bước đi cho thấy tham vọng của Salesforce trong việc tích hợp AI sâu hơn vào các sản phẩm cộng tác doanh nghiệp của mình.',
        ],
      },
      {
        heading: 'Vai trò của Claude trong hệ sinh thái Slack',
        paragraphs: [
          'Theo thông cáo báo chí chính thức, thông qua quan hệ hợp tác mở rộng lần này, Claude sẽ đóng vai trò là mô hình nền tảng mặc định cho Slack, vận hành xuyên suốt mọi lớp trải nghiệm của nền tảng — từ việc nâng cấp năng lực của tính năng trợ lý Slackbot cho đến hỗ trợ năng suất làm việc tổng thể cho người dùng doanh nghiệp. Sự kết hợp này được định vị là một phần trong chiến lược của Salesforce nhằm giúp các tổ chức trở thành "Agentic Enterprise" — mô hình doanh nghiệp nơi con người, các tác tử AI (AI agent), ứng dụng và dữ liệu được tích hợp liền mạch trên một nền tảng thống nhất, đáng tin cậy.',
        ],
      },
      {
        heading: 'Lộ trình triển khai',
        paragraphs: [
          'Chương trình hợp tác hiện đã được triển khai cho một nhóm khách hàng thí điểm được lựa chọn, với kế hoạch chính thức mở rộng ra bản beta công khai vào tháng 9/2026. Hai công ty cũng cho biết sẽ tiếp tục bổ sung thêm các "kỹ năng dựng sẵn" cho Claude trong hệ sinh thái Slack vào cuối năm nay, nhằm mở rộng phạm vi các tác vụ mà doanh nghiệp có thể tự động hóa thông qua sự kết hợp giữa hai nền tảng — cho thấy đây được xem là một khoản đầu tư dài hạn hơn là một tính năng bổ sung đơn thuần.',
        ],
      },
    ],
  },
  {
    slug: 'eu-thuc-thi-dao-luat-ai',
    title: 'EU chính thức thực thi Đạo luật AI: kỷ nguyên giám sát AI ở châu Âu bắt đầu',
    excerpt:
      'Từ đầu tháng 8/2026, Liên minh châu Âu chính thức bước vào giai đoạn thực thi các quy định minh bạch đối với hệ thống trí tuệ nhân tạo.',
    date: '2026-09-02',
    category: 'Quy định',
    coverImage: '/images/news/16.png',
    sections: [
      {
        paragraphs: [
          'Từ đầu tháng 8/2026, Liên minh châu Âu chính thức bước vào giai đoạn thực thi các quy định minh bạch đối với hệ thống trí tuệ nhân tạo, đánh dấu bước ngoặt quan trọng trong nỗ lực quản lý công nghệ này ở quy mô toàn khối — một trong những nỗ lực pháp lý tham vọng nhất thế giới trong lĩnh vực AI.',
        ],
      },
      {
        heading: 'Các yêu cầu minh bạch chính thức có hiệu lực',
        paragraphs: [
          'Kể từ ngày 2/8/2026, Văn phòng AI thuộc Ủy ban châu Âu cùng các cơ quan quản lý cấp quốc gia chính thức có thẩm quyền thực thi các điều khoản minh bạch theo Điều 50 của Đạo luật AI. Các yêu cầu bao gồm: hệ thống AI phải thông báo rõ ràng khi người dùng đang tương tác với AI thay vì con người; công khai các nội dung deepfake; gắn nhãn nội dung do AI tạo ra liên quan đến các vấn đề lợi ích công chúng; và đánh dấu nội dung tổng hợp theo định dạng mà máy tính có thể tự động đọc và nhận diện được.',
        ],
      },
      {
        heading: 'Lùi thời hạn cho các quy định "rủi ro cao"',
        paragraphs: [
          'Tuy nhiên, một gói sửa đổi mang tên "Digital Omnibus on AI" — chính thức có hiệu lực từ ngày 27/7/2026, chỉ vài ngày trước thời điểm áp dụng chính — đã lùi thời hạn cho các quy định khắt khe nhất, áp dụng cho hệ thống AI được xếp loại "rủi ro cao", sang tháng 12/2027 và tháng 8/2028 tùy theo loại hệ thống. Lý do được đưa ra là các tiêu chuẩn kỹ thuật cần thiết cùng năng lực giám sát tại nhiều quốc gia thành viên vẫn chưa sẵn sàng để thực thi đúng lịch trình ban đầu — một thừa nhận cho thấy khoảng cách giữa tham vọng lập pháp và năng lực triển khai thực tế.',
        ],
      },
      {
        heading: 'Đẩy nhanh tiến độ cấm nội dung AI xâm hại',
        paragraphs: [
          'Đáng chú ý, cùng gói sửa đổi này lại đẩy nhanh tiến độ ở một khía cạnh khác mang tính cấp bách hơn về mặt đạo đức: kể từ tháng 12/2026, EU sẽ chính thức cấm hoàn toàn các hệ thống AI có khả năng tạo ra nội dung khiêu dâm không có sự đồng thuận của người trong ảnh, hoặc nội dung liên quan đến xâm hại tình dục trẻ em. Doanh nghiệp vi phạm các hành vi AI bị cấm hoàn toàn có thể đối mặt mức phạt lên tới 35 triệu euro hoặc 7% doanh thu toàn cầu hằng năm; các vi phạm khác về nghĩa vụ của nhà vận hành có thể bị phạt tới 15 triệu euro hoặc 3% doanh thu toàn cầu — cho thấy dù một số quy định được lùi thời hạn, EU vẫn giữ lập trường cứng rắn đối với những nội dung được xem là có nguy cơ gây hại nghiêm trọng nhất.',
        ],
      },
    ],
  },
  {
    slug: 'quoc-hoi-my-dung-sao-chep-luat-ai-chau-au',
    title: 'Bài bình luận: Quốc hội Mỹ đừng sao chép luật AI của châu Âu',
    excerpt:
      'Việc châu Âu buộc phải lùi thời hạn thực thi phần quy định khó nhất trong Đạo luật AI được xem là bài học cảnh báo cho các nhà lập pháp Mỹ.',
    date: '2026-09-03',
    category: 'Quy định',
    coverImage: '/images/news/17.png',
    sections: [
      {
        paragraphs: [
          'Việc châu Âu buộc phải lùi thời hạn thực thi phần quy định khó nhất trong Đạo luật AI được một cây bút bình luận xem là bài học cảnh báo trực tiếp cho các nhà lập pháp Mỹ, trong bối cảnh Quốc hội Mỹ vẫn đang cân nhắc các khung pháp lý riêng cho AI.',
        ],
      },
      {
        heading: 'Bài học từ sự chậm trễ của châu Âu',
        paragraphs: [
          'Trong bài bình luận đăng trên chuyên mục quan điểm, tác giả — người tự nhận có kinh nghiệm quan sát trực tiếp quá trình này — cho rằng việc EU phải hoãn phần quy định về hệ thống AI "rủi ro cao" thêm tới 16 tháng, chỉ vài tuần sau khi các quy định minh bạch chính thức bắt đầu có hiệu lực, phản ánh một thực tế đáng suy ngẫm: ngay chính những cơ quan đã soạn thảo ra bộ luật AI được xem là tham vọng nhất thế giới cũng không thể tự xây dựng kịp bộ máy giám sát và các tiêu chuẩn kỹ thuật cần thiết theo đúng lịch trình mà họ tự đặt ra.',
        ],
      },
      {
        heading: 'Khuyến nghị đối với Quốc hội Mỹ',
        paragraphs: [
          'Từ quan sát đó, tác giả đưa ra khuyến nghị rằng Quốc hội Mỹ nên hết sức thận trọng, tránh lặp lại cách tiếp cận lập pháp mang tính cứng nhắc và tập trung quá mức vào các cơ chế tiền kiểm phức tạp theo mô hình của châu Âu. Lập luận cốt lõi của tác giả là: ngay cả "cha đẻ" của bộ luật này cũng đang loay hoay với khâu vận hành thực tế, cho thấy khoảng cách lớn giữa tham vọng chính sách trên giấy và năng lực thực thi trong thực tiễn — và đây là điều mà các nhà lập pháp Mỹ cần cân nhắc kỹ trước khi thiết kế bất kỳ khung pháp lý tương tự nào cho riêng nước Mỹ.',
        ],
      },
    ],
  },
  {
    slug: 'quy-dinh-ai-toan-cau-thang-9-2026',
    title: 'Quy định AI toàn cầu bước vào giai đoạn thực thi trong tháng 9/2026',
    excerpt:
      'Nhiều quốc gia và khu vực lớn đồng loạt chuyển từ chuẩn bị hành chính sang thực thi các quy định quản lý AI ngay trong tháng 9/2026.',
    date: '2026-09-15',
    category: 'Quy định',
    coverImage: '/images/news/18.png',
    sections: [
      {
        paragraphs: [
          'Không chỉ riêng châu Âu, nhiều quốc gia và khu vực lớn trên thế giới đồng loạt chuyển từ giai đoạn chuẩn bị hành chính sang thực thi các quy định quản lý AI ngay trong tháng 9/2026, cho thấy đây là một xu hướng mang tính toàn cầu chứ không chỉ giới hạn ở một khu vực pháp lý riêng lẻ.',
        ],
      },
      {
        heading: 'Hàng loạt mốc pháp lý diễn ra gần như song song',
        paragraphs: [
          'Theo một bài tổng hợp chuyên đề, tháng 9/2026 chứng kiến hàng loạt mốc pháp lý quan trọng diễn ra gần như song song ở nhiều khu vực. Văn phòng AI của châu Âu bắt đầu tiến hành các cuộc kiểm toán kỹ thuật đối với hồ sơ tài liệu kỹ thuật theo Điều 11, áp dụng cho các hệ thống AI "rủi ro cao" được triển khai sau ngày 2/8. Tại Mỹ, bang California đứng trước hạn chót quan trọng để Thống đốc ký ban hành hoặc phủ quyết dự luật SB 1047 về an toàn AI — một dự luật cấp bang nhưng có tầm ảnh hưởng gần như liên bang do quy mô thị trường công nghệ của bang này. Trong khi đó, Brazil chuẩn bị đưa dự luật số 2338 ra bỏ phiếu, còn Ấn Độ công bố khung trách nhiệm pháp lý dành riêng cho các hệ thống AI.',
        ],
      },
      {
        heading: 'Hạn nộp báo cáo đánh giá rủi ro hệ thống',
        paragraphs: [
          'Một mốc thời gian đáng chú ý khác: đến ngày 15/9, các nhà cung cấp mô hình AI nền tảng có quy mô tính toán huấn luyện vượt ngưỡng 10 mũ 25 phép tính dấu phẩy động sẽ phải nộp báo cáo đánh giá rủi ro hệ thống đầu tiên cho Văn phòng AI của châu Âu. Báo cáo này sẽ được xem xét trên các tiêu chí như phương pháp kiểm thử đối kháng, mức độ công khai tiêu thụ năng lượng, và việc tuân thủ mẫu tóm tắt dữ liệu huấn luyện liên quan đến bản quyền vừa được công bố hồi tháng 7 — cho thấy phạm vi giám sát của EU không chỉ dừng ở khía cạnh an toàn kỹ thuật mà còn mở rộng sang cả vấn đề môi trường và bản quyền.',
        ],
      },
      {
        heading: 'Bức tranh phân mảnh tại Mỹ',
        paragraphs: [
          'Trong khi đó, tại Mỹ — nơi chưa có một đạo luật liên bang thống nhất về AI — các bang tiếp tục tự ban hành những quy định riêng lẻ, tạo ra một môi trường pháp lý phân mảnh. Điều này buộc các doanh nghiệp hoạt động đa bang phải theo dõi và đảm bảo tuân thủ ở nhiều cấp độ quản lý khác nhau cùng lúc, làm tăng đáng kể chi phí tuân thủ pháp lý so với việc chỉ phải đối mặt với một bộ quy định thống nhất duy nhất.',
        ],
      },
    ],
  },
  {
    slug: 'trung-quoc-dang-dan-dau-cuoc-dua-ai',
    title: 'Có phải Trung Quốc đang dẫn đầu cuộc đua trí tuệ nhân tạo?',
    excerpt:
      'Trước loạt động thái công nghệ và chính trị gần đây, câu hỏi quốc gia nào đang thực sự dẫn đầu cuộc đua AI trở nên nóng hơn bao giờ hết.',
    date: '2026-09-14',
    category: 'Địa chính trị',
    coverImage: '/images/news/19.png',
    sections: [
      {
        paragraphs: [
          'Trước loạt động thái công nghệ và chính trị gần đây, câu hỏi về việc quốc gia nào đang thực sự dẫn đầu cuộc đua trí tuệ nhân tạo toàn cầu trở nên nóng hơn bao giờ hết trên truyền thông quốc tế, phản ánh mức độ quan tâm ngày càng lớn của công chúng đối với cuộc cạnh tranh công nghệ Mỹ - Trung.',
        ],
      },
      {
        heading: 'Ba diễn biến định hình cuộc tranh luận',
        paragraphs: [
          'Bản tin tổng hợp điểm lại ba diễn biến đáng chú ý cùng góp phần vào cuộc tranh luận này. Thứ nhất là việc Alibaba tuyên bố mô hình Qwen mới của hãng có thể cạnh tranh trực tiếp với các đối thủ cả trong nước lẫn quốc tế, bao gồm DeepSeek, OpenAI và Meta. Thứ hai là làn sóng lo ngại ngày càng lớn tại Mỹ xoay quanh vấn đề an ninh dữ liệu liên quan đến DeepSeek, được nhiều nhà quan sát xem là một "mặt trận mới" trong cuộc cạnh tranh công nghệ tổng thể giữa Mỹ và Trung Quốc — không còn chỉ dừng ở khía cạnh hiệu năng mô hình mà đã mở rộng sang cả vấn đề bảo mật và chủ quyền dữ liệu. Thứ ba là đề xuất từ một Thượng nghị sĩ đảng Cộng hòa của Mỹ nhằm cắt đứt hoàn toàn mọi hoạt động hợp tác nghiên cứu và phát triển AI giữa hai quốc gia — một động thái cho thấy mức độ căng thẳng ngày càng leo thang trên mặt trận chính sách.',
        ],
      },
      {
        heading: 'AI không còn là câu chuyện thuần công nghệ',
        paragraphs: [
          'Bài viết cho thấy rõ cuộc tranh luận về vị thế dẫn đầu trong lĩnh vực AI không còn chỉ dừng lại ở khía cạnh thuần túy công nghệ hay hiệu năng mô hình, mà ngày càng gắn chặt và đan xen với các yếu tố an ninh quốc gia, chuỗi cung ứng chip bán dẫn, và toan tính chính sách đối ngoại giữa hai siêu cường công nghệ. Điều này khiến việc trả lời câu hỏi "ai đang dẫn đầu" trở nên phức tạp hơn nhiều so với việc chỉ đơn thuần so sánh các chỉ số benchmark kỹ thuật.',
        ],
      },
    ],
  },
  {
    slug: 'anthropic-ga-khong-lo-dinh-gia-hang-tram-ty',
    title: 'Anthropic: từ công ty an toàn AI đến "gã khổng lồ" được định giá hàng trăm tỷ USD',
    excerpt:
      'Dù đối mặt hàng loạt vụ kiện bản quyền, Anthropic vẫn thu hút khoản đầu tư khổng lồ và được đồn đoán tiến gần tới IPO ở mức định giá kỷ lục.',
    date: '2026-09-10',
    category: 'Thị trường',
    coverImage: '/images/news/20.png',
    sections: [
      {
        paragraphs: [
          'Trong bối cảnh vừa đối mặt hàng loạt vụ kiện bản quyền, Anthropic vẫn tiếp tục thu hút những khoản đầu tư khổng lồ từ các tập đoàn công nghệ lớn, được đồn đoán đang tiến gần tới một đợt IPO ở mức định giá kỷ lục — cho thấy áp lực pháp lý dường như chưa ảnh hưởng đáng kể đến niềm tin của giới đầu tư.',
        ],
      },
      {
        heading: 'Doanh thu và các khoản đầu tư khổng lồ',
        paragraphs: [
          'Theo tổng hợp thông tin thị trường tính đến đầu tháng 9/2026, Anthropic hiện ghi nhận mức doanh thu định kỳ hằng năm vượt 30 tỷ USD, tương ứng mức tăng trưởng khoảng 1.400% so với cùng kỳ năm trước — một tốc độ tăng trưởng hiếm thấy ngay cả trong ngành công nghệ vốn nổi tiếng với tốc độ phát triển nhanh. Về mặt huy động vốn, Google đã cam kết rót tới 40 tỷ USD vào Anthropic ở mức định giá 350 tỷ USD, đi kèm cam kết cung cấp 5 gigawatt năng lực điện toán đám mây trong vòng 5 năm tới. Chỉ trong cùng tuần đó, Amazon cũng công bố khoản đầu tư bổ sung 25 tỷ USD cùng năng lực chip Trainium tương ứng — cho thấy cả hai gã khổng lồ công nghệ đều đang đặt cược lớn vào tương lai của công ty. Những con số này khiến khả năng Anthropic tiến hành IPO vào tháng 10 tới, ở mức định giá ước tính khoảng 800 tỷ USD, trở thành một kịch bản được thị trường tài chính tính đến một cách nghiêm túc.',
        ],
      },
      {
        heading: 'Sự cố bảo mật liên quan đến mô hình Mythos',
        paragraphs: [
          'Bên cạnh câu chuyện tài chính đầy ấn tượng, tháng 9 cũng chứng kiến một sự cố bảo mật đáng chú ý liên quan đến Mythos — mẫu mô hình được giữ lại trong khuôn khổ một chương trình nội bộ mang tên Project Glasswing do sở hữu khả năng tự động phát hiện lỗ hổng bảo mật phần mềm ở mức độ "zero-day". Theo thông tin được ghi nhận, mô hình này đã bị xâm nhập thông qua một cổng thông tin của bên thứ ba trong chuỗi cung ứng, chứ không phải xuất phát từ lỗ hổng ngay trong bản thân mô hình AI. Điều này cho thấy khâu kiểm soát rủi ro trong trường hợp này gặp vấn đề ở lớp quản lý nhà cung cấp và quy trình mua sắm — một lời nhắc nhở rằng ngay cả với các mô hình AI tiên tiến nhất, rủi ro bảo mật thực tế thường không nằm ở chính công nghệ lõi mà ở những mắt xích yếu hơn trong toàn bộ chuỗi cung ứng và vận hành.',
        ],
      },
    ],
  },
]

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug)
}

export function formatNewsDate(date: string): string {
  const d = new Date(date + 'T00:00:00')
  return d.toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
