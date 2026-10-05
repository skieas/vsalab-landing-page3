import { Product, Region, ProcessStep, Article } from '../types';
import { CATALOG_PRODUCTS } from './catalogData';

export const HERO_IMAGE = "/images/banner/banner-hero-cam-rung-tay-giang.jpg";
export const FARMER_IMAGE = "https://res.cloudinary.com/q6vqmtq4/image/upload/v1791196666/Farmers_harvesting_and_scientist__20261005173709.jpg";
export const DISTILLATION_BG = "/images/background/quy-trinh-chung-cat-tinh-dau.jpg";
export const BRAND_STORY_BG = "https://res.cloudinary.com/q6vqmtq4/image/upload/v1791197204/Gemini_Generated_Image_sa17v9sa17v9sa17.png";

export const REGIONS: Region[] = [
  {
    id: 'tay-giang',
    name: 'Tây Giang (Quảng Nam)',
    province: 'Quảng Nam',
    tagline: 'Đại ngàn Trường Sơn hùng vĩ',
    herbs: ['Cam rừng', 'Tràm', 'Sả', 'Quế...'],
    description: 'Khí hậu mát mẻ quanh năm, thổ nhưỡng rừng già nguyên sinh thích hợp cho cam rừng cổ thụ và các loài dược liệu quý với hàm lượng tinh dầu đậm đặc bậc nhất.',
    fullStory: 'Tây Giang nằm ở sườn Đông dãy Trường Sơn, với độ cao trung bình trên 1.200m so với mực nước biển. Nơi đây sở hữu khí hậu á nhiệt đới trong lành cùng những cánh rừng nguyên sinh bạt ngàn. Trung tâm Khoa học và Chuyển giao Công Nghệ Nông nghiệp VSA phối hợp cùng HTX Dược liệu và Nông sản sạch Cách Mạng Xanh (Thôn Tr\'Hy, Hùng Sơn) đồng hành với bà con bản địa thu hái quả cam rừng tự nhiên bền vững, bảo tồn hệ sinh thái đại ngàn.',
    altitude: '1.200m - 1.500m',
    climate: 'Á nhiệt đới núi cao, sương mù quanh năm',
    image: 'https://res.cloudinary.com/q6vqmtq4/image/upload/v1791196252/tay-giang-quang-nam-4_1633345876.webp'
  },
  {
    id: 'quang-ngai',
    name: 'Quảng Ngãi',
    province: 'Duyên hải Nam Trung Bộ',
    tagline: 'Vùng đất nắng gió hội tụ tinh hoa',
    herbs: ['Gừng', 'nghệ', 'sả...'],
    description: 'Vùng đất nắng gió, thích hợp cho cây gừng, nghệ, sả, bưởi... với hương thơm cay nồng đặc trưng và hoạt chất tinh dầu cao vượt trội.',
    fullStory: 'Được nuôi dưỡng bởi lượng ánh nắng dồi dào và nguồn nước ngầm trong mát từ thượng nguồn sông Trà Khúc, vùng đất Quảng Ngãi mang lại cho các loại cây tinh dầu hàm lượng este thơm và cineol tự nhiên vượt trội. Bà con nông dân tại các hợp tác xã liên kết của Vườn Tinh Dầu cam kết 100% không sử dụng phân bón hóa học hay thuốc trừ sâu.',
    altitude: '50m - 300m',
    climate: 'Nhiệt đới gió mùa, nắng ấm dồi dào',
    image: 'https://res.cloudinary.com/q6vqmtq4/image/upload/v1791196398/46416efb-41c5-4f77-921e-3a6a50b050d5dyxr-1731894587199-1731894588073779201541.jpg'
  },
  {
    id: 'ninh-binh',
    name: 'Quảng Bình',
    province: 'Bắc Trung Bộ',
    tagline: 'Nơi Đại Ngàn Trường Sơn Gìn Giữ Những Giá Trị Nguyên Bản',
    herbs: ['Tràm gió', 'thảo mộc Trường Sơn...'],
    description: 'Nơi giao thoa giữa dãy Trường Sơn hùng vĩ và biển Đông rộng lớn, sở hữu hệ sinh thái rừng nguyên sinh và núi đá vôi cổ xưa cùng nguồn thảo mộc bản địa phong phú.',
    fullStory: 'Được biết đến là nơi giao thoa giữa dãy Trường Sơn hùng vĩ và biển Đông rộng lớn, Quảng Bình sở hữu hệ sinh thái đa dạng với những khu rừng nguyên sinh, những vùng núi đá vôi cổ xưa cùng nguồn tài nguyên thực vật phong phú. Nơi đây không chỉ là vùng đất của những kỳ quan thiên nhiên, mà còn là nơi lưu giữ những loài cây bản địa quý giá – nguồn cảm hứng cho hành trình tìm kiếm và phát triển những sản phẩm tinh dầu nguyên bản của VSA LAB.',
    altitude: '100m - 1.200m',
    climate: 'Nhiệt đới gió mùa, giao thoa núi và biển',
    image: 'https://res.cloudinary.com/q6vqmtq4/image/upload/v1791196397/4-1724342657142.webp'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'Bước 01',
    number: '01',
    title: 'Trồng trọt & chăm sóc',
    subtitle: 'Nông nghiệp hữu cơ',
    description: 'Áp dụng nghiêm ngặt phương pháp canh tác hữu cơ, hoàn toàn không hóa chất trừ sâu hay phân bón tổng hợp.',
    details: [
      'Chọn giống bản địa thuần chủng từ các viện nông nghiệp',
      'Đất canh tác được nghỉ luân canh và xét nghiệm định kỳ',
      'Phân bón vi sinh tự ủ từ bã thực vật và vỏ trấu'
    ],
    image: '/images/background/quy-trinh-buoc-1-canh-tac-huu-co.jpg',
    iconName: 'Sprout'
  },
  {
    step: 'Bước 02',
    number: '02',
    title: 'Thu hoạch & sơ chế',
    subtitle: 'Đúng thời điểm vàng',
    description: 'Thu hái thủ công vào sáng sớm khi sương vừa tan để hàm lượng tinh dầu và hoạt chất thơm đạt đỉnh cao nhất.',
    details: [
      'Thu hái chọn lọc bằng tay từng búp non hoặc lá trưởng thành',
      'Loại bỏ hoàn toàn lá úa, tạp chất và đất cát trong 2 giờ đầu',
      'Sơ chế và rửa sạch bằng nguồn nước giếng ngầm tự nhiên'
    ],
    image: '/images/products/tinh-dau-que-tra-bong-quang-ngai.jpg',
    iconName: 'Scissors'
  },
  {
    step: 'Bước 03',
    number: '03',
    title: 'Chiết xuất hiện đại',
    subtitle: 'Chưng cất lôi cuốn hơi nước',
    description: 'Sử dụng hệ thống nồi chưng cất inox 304 tiêu chuẩn dược phẩm, kiểm soát nhiệt độ và áp suất chính xác bằng vi tính.',
    details: [
      'Công nghệ chưng cất lôi cuốn hơi nước áp suất thấp',
      'Ngưng tụ khép kín bằng dàn làm lạnh đa tầng',
      'Giữ trọn vẹn phổ hương tự nhiên và các vi chất quý giá'
    ],
    image: '/images/blog/bai-viet-nghe-thuat-chieu-chua-mui-huong.jpg',
    iconName: 'Flame'
  },
  {
    step: 'Bước 04',
    number: '04',
    title: 'Kiểm nghiệm chất lượng',
    subtitle: 'Tiêu chuẩn quốc tế',
    description: 'Mỗi mẻ chiết xuất đều được phân tích sắc ký khí phổ khối (GC-MS) tại trung tâm kiểm định độc lập uy tín.',
    details: [
      'Phân tích định tính & định lượng hoạt chất chính',
      'Xác nhận không chứa cồn, hương liệu công nghiệp hay dầu khoáng',
      'Cấp chứng thư phân tích COA cho từng lô xuất xưởng'
    ],
    image: '/images/background/quy-trinh-buoc-4-kiem-nghiem-gcms.jpg',
    iconName: 'Microscope'
  },
  {
    step: 'Bước 05',
    number: '05',
    title: 'Đóng chai thành phẩm',
    subtitle: 'Phòng sạch vô trùng',
    description: 'Đóng chai thủy tinh hổ phách chuẩn dược phẩm chống tia UV, niêm phong nắp nhỏ giọt và mã QR truy xuất nguồn gốc.',
    details: [
      'Quy trình đóng chai khép kín trong môi trường vô trùng Class 100,000',
      'Chai thủy tinh tối màu nhập khẩu chống oxy hóa quang học',
      'Mỗi chai mang mã định danh duy nhất truy xuất đến từng luống đất'
    ],
    image: '/images/products/tinh-dau-hoa-nhai-sambac.jpg',
    iconName: 'PackageCheck'
  }
];

export const PRODUCTS: Product[] = CATALOG_PRODUCTS;

export const ARTICLES: Article[] = [
  {
    id: 'moi-mien-dat-mot-su-menh',
    title: 'Mỗi Miền Đất – Một Sứ Mệnh: Hành Trình Từ Cây Cỏ Đến Tìm Tinh Dầu Nguyên Bản',
    category: 'Câu chuyện thương hiệu',
    date: '04/10/2026',
    author: 'Trung tâm Khoa học VSA LAB',
    readTime: '6 phút đọc',
    image: '/images/background/cau-chuyen-thuong-hieu-vsalab.jpg',
    excerpt: 'Có những mùi hương chỉ đơn thuần là hương thơm. Nhưng cũng có những mùi hương mang theo cả một vùng đất, một câu chuyện và một hành trình dài của thiên nhiên.',
    content: [
      'Có những mùi hương chỉ đơn thuần là hương thơm. Nhưng cũng có những mùi hương mang theo cả một vùng đất, một câu chuyện và một hành trình dài của thiên nhiên.',
      'Mỗi chai tinh dầu nguyên bản không chỉ được tạo nên từ cây cỏ. Đó là kết tinh của khí hậu, thổ nhưỡng, nguồn nước, ánh nắng, bàn tay người nông dân và sự kiên trì của những người luôn theo đuổi giá trị tự nhiên. Vì thế, phía sau từng giọt tinh dầu là một miền đất với một sứ mệnh riêng.',
      'Không phải nơi nào cũng có thể tạo ra tinh dầu đạt chất lượng cao. Cùng một loài cây nhưng khi sinh trưởng ở những vùng đất khác nhau sẽ tạo nên thành phần hóa học, mùi hương và hiệu quả trị liệu khác nhau. Một cây sả được trồng trên vùng đất nhiều nắng sẽ cho lượng tinh dầu khác với cây sả được trồng ở vùng đất ẩm. Oải hương trên cao nguyên mang nét thanh mát khác với oải hương ở vùng khí hậu ôn hòa. Tràm sinh trưởng trong điều kiện tự nhiên đặc trưng sẽ tạo nên mùi hương mạnh mẽ và giàu hoạt chất hơn.',
      'Đó là lý do những người theo đuổi tinh dầu nguyên bản luôn bắt đầu bằng câu hỏi: "Vùng đất nào là nơi cây phát huy được giá trị tốt nhất?"',
      'Có những vùng núi cao quanh năm mây phủ, nơi cây hấp thụ tinh hoa của đất trời qua từng mùa. Có những cánh rừng bạt ngàn, nơi cây lớn lên hoàn toàn tự nhiên mà không cần sự can thiệp của hóa chất. Có những vùng ven biển đầy nắng gió, nơi thảo mộc tích lũy lượng tinh dầu đậm đặc để thích nghi với điều kiện khắc nghiệt. Mỗi vùng đất đều góp phần tạo nên một dấu ấn riêng trong từng giọt tinh dầu. Khi mở nắp chai, điều chúng ta cảm nhận không chỉ là mùi hương, mà còn là hơi thở của thiên nhiên từ nơi cây đã lớn lên.',
      'Để có được một chai tinh dầu nguyên chất, hành trình không bắt đầu ở nhà máy mà bắt đầu từ việc tìm kiếm vùng nguyên liệu phù hợp. Đó là quá trình khảo sát khí hậu, đất đai, giống cây, thời điểm thu hoạch và phương pháp chăm sóc. Sau khi thu hoạch, cây phải được chưng cất trong thời gian thích hợp để giữ lại tối đa các hợp chất thơm tự nhiên. Chỉ cần thu hoạch quá sớm, quá muộn hoặc chưng cất không đúng kỹ thuật, chất lượng tinh dầu sẽ thay đổi đáng kể. Tinh dầu nguyên bản vì thế không phải là sản phẩm được tạo ra nhanh chóng. Nó là kết quả của sự kiên nhẫn, tỉ mỉ và tôn trọng quy luật của thiên nhiên.',
      'Để thu được chỉ một lít tinh dầu, người ta có thể cần đến hàng chục, hàng trăm, thậm chí hàng nghìn kilôgam nguyên liệu tươi, tùy từng loại cây. Điều đó giải thích vì sao tinh dầu nguyên chất luôn được xem là món quà quý giá mà thiên nhiên ban tặng. Giá trị của nó không nằm ở dung tích nhỏ bé của chai tinh dầu, mà nằm ở lượng thời gian, công sức và tài nguyên thiên nhiên đã được chắt lọc để tạo nên từng giọt.',
      'Khi lựa chọn tinh dầu nguyên bản, chúng ta không chỉ chọn một sản phẩm chăm sóc sức khỏe hay thư giãn. Chúng ta đang lựa chọn sự minh bạch về nguồn gốc, sự tôn trọng thiên nhiên và niềm tin vào những giá trị bền vững. Mỗi chai tinh dầu là một đại diện cho vùng đất đã nuôi dưỡng cây cỏ. Mỗi mùi hương là một câu chuyện về khí hậu, con người và thiên nhiên. Mỗi giọt tinh dầu là minh chứng rằng những điều tinh túy nhất luôn cần thời gian để hình thành.',
      'Có thể chúng ta không đặt chân đến mọi miền đất, nhưng thông qua từng giọt tinh dầu, chúng ta vẫn có thể cảm nhận được linh hồn của nơi ấy. Bởi mỗi miền đất đều mang một sứ mệnh: Sứ mệnh nuôi dưỡng cây cỏ. Sứ mệnh gìn giữ giá trị nguyên bản. Và sứ mệnh trao tặng con người những tinh hoa thuần khiết nhất mà thiên nhiên đã âm thầm vun đắp qua năm tháng.',
      'Mỗi sản phẩm tinh dầu là một câu chuyện. Và mỗi câu chuyện đều bắt đầu từ một miền đất.'
    ]
  },
  {
    id: 'cau-chuyen-tay-giang',
    title: 'Câu chuyện rừng nguyên liệu Tây Giang – Hồn thiêng đại ngàn Quảng Nam',
    category: 'Vùng nguyên liệu & Tri thức bản địa',
    date: '15/03/2025',
    author: 'VSA LAB & HTX Cách Mạng Xanh',
    readTime: '6 phút đọc',
    image: 'https://res.cloudinary.com/q6vqmtq4/image/upload/v1791195712/Farmer_harvesting_medicinal_herbs_20261005171809.jpg',
    excerpt: 'Ẩn mình giữa những dãy núi hùng vĩ của Trường Sơn, Tây Giang không chỉ là vùng đất của mây ngàn và rừng già, mà còn là nơi thiên nhiên gìn giữ những loài cây dược liệu quý giá qua hàng trăm năm.',
    content: [
      'Ẩn mình giữa những dãy núi hùng vĩ của Trường Sơn, Tây Giang không chỉ là vùng đất của mây ngàn và rừng già, mà còn là nơi thiên nhiên gìn giữ những loài cây dược liệu quý giá qua hàng trăm năm. Đây là vùng nguyên liệu đặc biệt mà VSA LAB lựa chọn đồng hành, bởi chúng tôi tin rằng một sản phẩm chất lượng luôn bắt đầu từ một vùng đất nguyên bản.',
      'Hành trình đến Tây Giang không đơn thuần là vượt qua những cung đường đèo quanh co. Đó là hành trình tìm về cội nguồn của thiên nhiên, nơi mỗi cánh rừng, mỗi dòng suối và mỗi loài cây đều mang trong mình câu chuyện của thời gian.',
      'Ở độ cao hàng nghìn mét so với mực nước biển, khí hậu mát mẻ quanh năm cùng hệ sinh thái rừng nguyên sinh đã tạo điều kiện lý tưởng để nhiều loài thực vật thơm và cây dược liệu phát triển mạnh mẽ.',
      'Những rặng quế Trà My, những bụi sả rừng, gừng gió, màng tang, hương nhu, cùng nhiều loài thảo mộc bản địa hấp thụ tinh hoa của đất, nước và khí hậu đại ngàn để tích lũy những hoạt chất quý giá trong từng chiếc lá, thân cây và lớp vỏ.',
      'Chính điều kiện tự nhiên đặc biệt ấy đã tạo nên hương thơm đậm đà, tinh khiết và giàu bản sắc mà không vùng đất nào có thể sao chép.',
      'Điều làm nên giá trị của Tây Giang không chỉ nằm ở thiên nhiên, mà còn ở con người. Đồng bào Cơ Tu từ bao đời nay đã sống hài hòa với núi rừng, gìn giữ những kinh nghiệm quý trong việc nhận biết cây thuốc, chăm sóc rừng và thu hái thảo dược đúng mùa vụ.',
      'VSA LAB luôn trân trọng những tri thức bản địa ấy. Chúng tôi kết hợp kinh nghiệm truyền thống với quy trình nghiên cứu khoa học hiện đại để phát triển vùng nguyên liệu theo hướng bền vững, bảo đảm chất lượng nhưng vẫn giữ được tinh thần nguyên bản của thiên nhiên.',
      'Mỗi mùa thu hoạch đều được thực hiện cẩn trọng, lựa chọn đúng thời điểm cây đạt hàm lượng tinh dầu cao nhất. Nguyên liệu sau khi thu hái được vận chuyển và sơ chế nhanh chóng nhằm giữ trọn độ tươi, sau đó đưa vào quy trình chưng cất hiện đại để lưu giữ tối đa hương thơm và các hoạt chất tự nhiên.',
      'Đó là hành trình mà mỗi giọt tinh dầu đều mang theo hơi thở của đại ngàn, sự cần mẫn của người nông dân và tâm huyết của những người làm nghề.',
      'VSA LAB đồng hành cùng các hợp tác xã, hộ dân và cộng đồng địa phương trong việc phát triển vùng nguyên liệu, tạo sinh kế ổn định, nâng cao giá trị cây dược liệu và khuyến khích khai thác có trách nhiệm. Khi người dân có thể sống từ những giá trị mà rừng mang lại, những cánh rừng sẽ được bảo vệ bằng chính tình yêu và trách nhiệm của cộng đồng.',
      'Tây Giang – Khởi nguồn của những giọt hương nguyên bản. Mỗi chai tinh dầu được chưng cất từ những loài cây nơi đây không chỉ mang hương thơm thuần khiết, mà còn chứa đựng câu chuyện của đại ngàn, của những cánh rừng xanh được gìn giữ qua bao thế hệ. Từ Tây Giang, chúng tôi mang đến tinh hoa của đất trời Quảng Nam – kết tinh từ thiên nhiên, khoa học và khát vọng phát triển bền vững.'
    ]
  },
  {
    id: '5-loi-ich-tinh-dau',
    title: '5 lợi ích tuyệt vời của tinh dầu nguyên chất đối với giấc ngủ & thư giãn',
    category: 'Kiến thức tinh dầu & Thư giãn',
    date: '10/03/2025',
    author: 'Chuyên gia R&D VSA LAB',
    readTime: '5 phút đọc',
    image: 'https://res.cloudinary.com/q6vqmtq4/image/upload/v1791195804/Essential_oil_bottle_on_table_20261005172251.jpg',
    excerpt: 'Trong nhịp sống hiện đại, căng thẳng, áp lực công việc và việc tiếp xúc liên tục với các thiết bị điện tử khiến nhiều người gặp khó khăn trong việc thư giãn và có một giấc ngủ chất lượng.',
    content: [
      'Trong nhịp sống hiện đại, căng thẳng, áp lực công việc và việc tiếp xúc liên tục với các thiết bị điện tử khiến nhiều người gặp khó khăn trong việc thư giãn và có một giấc ngủ chất lượng. Giữa những bộn bề ấy, hương thơm từ tinh dầu nguyên chất đang trở thành một liệu pháp tự nhiên được nhiều người lựa chọn để chăm sóc sức khỏe tinh thần.',
      'Các phân tử hương thơm trong tinh dầu khi được khuếch tán vào không khí sẽ đi qua hệ khứu giác và tác động đến hệ viền (Limbic System) – vùng não liên quan đến cảm xúc, trí nhớ và phản ứng với căng thẳng. Chính cơ chế này giúp hương thơm mang lại cảm giác thư thái, dễ chịu và hỗ trợ cải thiện chất lượng giấc ngủ.',
      '1. Giúp cơ thể và tinh thần thư giãn sau một ngày dài: Những hương thơm dịu nhẹ từ các loại tinh dầu như oải hương, cam ngọt, gỗ đàn hương hay ngọc lan tây có thể tạo nên một không gian yên bình, giúp bạn giảm cảm giác căng thẳng và chuẩn bị cho thời gian nghỉ ngơi. Chỉ cần khuếch tán tinh dầu khoảng 20–30 phút trước khi đi ngủ, căn phòng sẽ trở nên dễ chịu hơn.',
      '2. Hỗ trợ cải thiện chất lượng giấc ngủ: Một giấc ngủ ngon không chỉ phụ thuộc vào thời lượng mà còn phụ thuộc vào chất lượng giấc ngủ. Không gian với hương thơm nhẹ nhàng giúp cơ thể dễ đi vào trạng thái nghỉ ngơi, giảm cảm giác bồn chồn trước khi ngủ và tạo điều kiện để bạn có một giấc ngủ sâu hơn.',
      '3. Tạo không gian sống dễ chịu và cân bằng cảm xúc: Một vài giọt tinh dầu trong phòng ngủ, phòng làm việc hoặc góc đọc sách sẽ giúp không gian trở nên ấm áp, thư thái và gần gũi hơn với thiên nhiên, giúp cân bằng cảm xúc và tái tạo năng lượng.',
      '4. Hỗ trợ xây dựng thói quen chăm sóc bản thân: Kết hợp tinh dầu với các hoạt động như thiền hoặc hít thở sâu, đọc sách trước khi ngủ, ngâm chân bằng nước ấm, massage nhẹ với tinh dầu pha loãng, tắm nước ấm thảo mộc.',
      '5. Mang thiên nhiên vào không gian sống: Khi khuếch tán tinh dầu trong ngôi nhà, bạn đang mang một phần hơi thở của núi rừng, cánh đồng và những vùng nguyên liệu thiên nhiên vào chính không gian sống của mình.',
      'Lựa chọn tinh dầu nguyên chất – Lựa chọn sự an tâm: Tại VSA LAB, mỗi giọt tinh dầu được tạo nên từ sự kết hợp giữa vùng nguyên liệu bền vững, quy trình nghiên cứu khoa học và sự trân trọng đối với những giá trị nguyên bản của thiên nhiên. VSA LAB – Giữ nguyên bản, đánh thức mọi giác quan.'
    ]
  },
  {
    id: 'cong-nghe-chiet-xuat',
    title: 'Công nghệ chiết xuất hơi nước: Nghệ thuật lưu giữ trọn vẹn linh hồn thảo mộc',
    category: 'Công nghệ sản xuất & R&D',
    date: '02/03/2025',
    author: 'Kỹ sư Hoàng Minh & R&D VSA LAB',
    readTime: '6 phút đọc',
    image: '/images/blog/bai-viet-nghe-thuat-chieu-chua-mui-huong.jpg',
    excerpt: 'Tinh dầu nguyên chất không chỉ được quyết định bởi giống cây hay vùng nguyên liệu, mà còn phụ thuộc rất lớn vào công nghệ chiết xuất hơi nước tinh khiết.',
    content: [
      'Tinh dầu nguyên chất không chỉ được quyết định bởi giống cây hay vùng nguyên liệu, mà còn phụ thuộc rất lớn vào công nghệ chiết xuất. Một quy trình chưng cất phù hợp có thể giữ lại gần như trọn vẹn những hợp chất thơm quý giá của thực vật, trong khi một quy trình không được kiểm soát tốt có thể làm biến đổi hoặc mất đi những thành phần tự nhiên quan trọng.',
      'Tại VSA LAB, chúng tôi lựa chọn công nghệ chưng cất bằng hơi nước tinh khiết với quy trình kiểm soát áp suất và nhiệt độ phù hợp, nhằm tôn trọng tối đa đặc tính tự nhiên của từng loài cây và lưu giữ giá trị nguyên bản trong mỗi giọt tinh dầu.',
      '1. Tinh dầu được hình thành như thế nào: Tinh dầu nằm trong các túi tiết nhỏ của lá, hoa, thân, vỏ hoặc rễ thực vật. Hơi nước mang theo các phân tử thơm đi vào bộ ngưng tụ, tách thành hai lớp tự nhiên: Lớp tinh dầu nguyên chất kỵ nước và Lớp nước chưng cất (Hydrosol) giàu hợp chất tan trong nước mà không cần dung môi hóa học.',
      '2. Vì sao chưng cất bằng hơi nước được đánh giá cao: Giữ được hương thơm gần với trạng thái tự nhiên của cây, hạn chế tối đa việc sử dụng dung môi hóa học, tạo ra sản phẩm có độ tinh khiết cao và phù hợp với nhiều loại thực vật.',
      '3. Từng loài cây đều có một quy trình riêng: Lá sả, lá tràm, bạc hà, vỏ quế hay hoa oải hương đều có cấu trúc và thành phần hóa học khác nhau. Quy trình tại VSA LAB được xây dựng dựa trên đặc tính của từng loại thực vật để tối ưu hóa hiệu quả.',
      '4. Khoa học đồng hành cùng thiên nhiên: Công nghệ là công cụ giúp bảo tồn những gì thiên nhiên đã tạo ra, giữ trọn hương thơm và giá trị vốn có của cây cỏ.',
      '5. Hành trình của một giọt tinh dầu: Vùng nguyên liệu bền vững, thu hoạch đúng thời điểm, quy trình chưng cất cẩn trọng, nghiên cứu khoa học và sự trân trọng đối với tự nhiên. VSA LAB – Giữ nguyên bản, đánh thức mọi giác quan.'
    ]
  }
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', code: 'ISO', subtitle: 'Quản lý chất lượng quốc tế', icon: 'Award' },
  { name: 'GMP Certified', code: 'GMP', subtitle: 'Thực hành sản xuất tốt', icon: 'ShieldCheck' },
  { name: 'USDA Organic', code: 'USDA', subtitle: 'Tiêu chuẩn canh tác hữu cơ', icon: 'Leaf' },
  { name: 'Quatest 3', code: 'QUATEST', subtitle: 'Kiểm nghiệm độc lập nhà nước', icon: 'CheckCircle2' },
  { name: 'VietGAP', code: 'VIETGAP', subtitle: 'Nông nghiệp sạch Việt Nam', icon: 'BadgeCheck' }
];
