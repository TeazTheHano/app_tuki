
import { View, Text, SafeAreaView, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import React, {useState} from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, NativeBaseProvider } from 'native-base';

const questions = [
  {
    quest: 'Number 1',
    questCase: [
      {
        questionText: 'Nếu như bạn chỉ vào một điểm trong phòng, trẻ có nhìn theo không?\n',
        descrip: [
          'Các ví dụ ĐẠT: \n',
          'Nhìn vào các đồ vật\n',
          'Chỉ vào các đồ vật\n',
          'Nhìn và nhận xét về đồ vật\n',
          'Nhìn nếu cha/ mẹ chỉ và nói “nhìn kìa!\n',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Nếu bạn chỉ vào một cái gì đó, trẻ thường làm gì?\n',
        descrip: [
          'Các ví dụ KHÔNG ĐẠT: \n',
          'Không phản ứng gì/ lờ cha/ mẹ đi\n',
          'Nhìn xung quanh phòng một cách ngẫu nhiên\n',
          'Nhìn vào ngón tay của cha/ mẹ\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: true },
        ],
      },
      {
        questionText: 'Hành động nào con bạn thực hiện thường xuyên hơn?\n',
        answerOptions: [
          { answerText: 'Hầu hết làm giống ví dụ ĐẠT', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Hầu hết làm giống ví dụ KHÔNG ĐẠT', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  {
    quest: 'Number 2',
    questCase: [
      {
        questionText: 'Con bạn có lờ âm thanh không, lờ người khác đi không?\n',
        descrip: [
          'Con bạn có biểu hiện nào trong 2 câu hỏi trên không?\n',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: true, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: true },
        ],
      },
    ],
  },
  {
    quest: 'Number 3',
    questCase: [
      {
        questionText: 'Trẻ có chơi trò giả vờ không?\n',
        descrip: [
          'Con bạn đã từng làm ít nhất 1 trong số những hoạt động này chưa: \n',
          'Giả vờ uống nước từ 1 cái cốc đồ chơi chưa?\n',
          'Giả vờ ăn từ 1 cái thìa hoặc dĩa đồ chơi chưa?\n',
          'Giả vờ nói chuyện điện thoại chưa?\n',
          'Giả vờ cho búp bê hoặc thú nhồi bông ăn thức ăn thật hoặc tưởng tượng chưa?\n',
          'Đẩy 1 cái xe như thể nó đang đi trên 1 con đường giả vờ chưa?\n',
          'Giả vờ là một robot, một máy bay, một nữ diễn viên ballet, hoặc bất kỳ nhân vật yêu thích khác chưa?\n',
          'Đặt một nồi đồ chơi trên một bếp giả vờ chưa?\n',
          'Giả vờ khuấy thức ăn chưa?\n',
          'Đặt một vật hoặc con búp bê vào một chiếc xe hơi hoặc xe tải như thể nó là người lái xe hoặc hành khách chưa?\n',
          'Giả vờ hút bụi thảm, quét nhà hoặc cắt cỏ chưa?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
    ],
  },
  {
    quest: 'Number 4',
    questCase: [
      {
        questionText: 'Trẻ có thích leo trèo lên đồ vật không?\n',
        descrip: [
          'Các ví dụ ĐẠT:\n',     
          'Trẻ thích leo lên cầu thang\n',
          'Trẻ thích leo lên ghế\n',
          'Trẻ thích leo lên đồ đạc trong nhà\n',
          'Trẻ thích leo lên thiết bị sân chơi ngoài trời...\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
    ],
  },
  {
    quest: 'Number 5',
    questCase: [
      {
        questionText: 'Trẻ có làm các chuyển động ngón tay một cách bất thường đến gần mắt của bé không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: true },
        ],
      },
      {
        questionText: 'Con của bạn có từng (Các ví dụ ĐẠT):...\n',
        descrip: [      
          'Nhìn vào bàn tay chưa?\n',
          'Chuyển động ngón tay khi chơi trò ú tìm chưa?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con của bạn có từng (Các ví dụ KHÔNG ĐẠT):... \n',
        descrip: [
          'Ngọ nguậy ngón tay gần mắt của con chưa?\n',
          'Giữ bàn tay của con và để gần mắt của con chưa?\n',
          'Giữ tay của mình ở cạnh bên mắt?\n',
          'Vỗ tay ở gần mặt của con chưa?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: true },
        ],
      },
      {
        questionText: 'Việc này có diễn ra hơn 2 lần 1 tuần không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: true, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: true },
        ]
      },
    ],
  },
  {
    quest: 'Number 6',
    questCase: [
      {
        questionText: 'Con bạn có dùng ngón tay trỏ của bé để yêu cầu việc gì đó, hoặc để muốn được giúp đỡ?\n',
        descrip: [
          '',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Nếu có thứ gì con bạn muốn nhưng ngoài tầm với, ví dụ như bim bim, đồ chơi ngoài tầm với, làm thế nào để con bạn lấy được chúng?\n',
        descrip: [
          'Con bạn có…\n',
          'Với đồ vật đó bằng cả tay không?\n', 
          'Dẫn bạn đến đồ vật đó không?\n', 
          'Cố gắng tự lấy đồ vật đó không?\n', 
          'Yêu cầu lấy đồ vật bằng từ ngữ hoặc tạo ra âm thanh không?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Nếu bạn nói “Chỉ cho cha/ mẹ xem nào”, con bạn có chỉ vào?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  {
    quest: 'Number 7',
    questCase: [
      {
        questionText: 'Con bạn có dùng ngón tay trỏ của bé để chỉ cho bạn thấy thứ gì đó thú vị mà trẻ thích thú không? \n',
        descrip: [
          'Có bao giờ trẻ muốn bạn nhìn thấy những thứ thú vị như…\n',
          'Một cái máy bay trên trời?\n',
          'Một chiếc xe tải trên đường?\n',
          'Một con bọ trên mặt đất?\n',
          'Một con vật trong sân?...\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Làm thế nào để con thu hút sự chú ý của bạn đến thứ đó? Con bạn có dùng 1 ngón tay để chỉ?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con bạn làm vậy để thể hiện sự thích thú, hay thể hiện cần sự giúp đỡ phải không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  {
    quest: 'Number 8',
    questCase: [
      {
        questionText: 'Trẻ có hứng thú với những đứa trẻ khác không?\n',
        descrip: [
          'Con bạn có hứng thú với những đứa trẻ khác mà không phải anh chị em trong nhà?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi bạn và con ở sân chơi hoặc siêu thị, con bạn có thường có biểu hiện tương tấc với những đứa trẻ khác không?\n',
        descrip: [
          'Trẻ có một trong những biểu hiện nào sau đây không:\n',
          'Chơi với 1 trẻ khác không?\n',
          'Nói chuyện với 1 trẻ khác không?\n',
          'Bập bẹ hoặc phát ra các âm thanh không?\n',
          'Quan sát hoặc nhìn trẻ khác\n',
          'Cười với trẻ khác không?\n',
          'Ban đầu ngại ngùng, nhưng sau đó cười?\n',
          'Hào hứng với một trẻ khác không? \n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con của bạn có phản ứng với những trẻ em khác hơn một nửa thời gian chúng chơi với nhau không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  {
    quest: 'Number 9',
    questCase: [
      {
        questionText: 'Trẻ có khoe bạn những đồ vật bằng cách mang hay ôm chúng đến cho bạn xem? Không phải để được bạn giúp đỡ, chỉ để chia sẻ niềm vui với bạn?\n',
        descrip: [
          '',   
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con bạn có thỉnh thoảng mang tới cho bạn một vài món đồ, ví dụ như:…?\n',
        descrip: [
          '1 bức tranh/ảnh hoặc đồ chơi để khoe không?\n',
          '1 bức tranh mà bé mới vẽ xong không?\n',
          '1 bông hoa bé mới hái không?\n',
          '1 con bọ bé tìm thấy trong bãi cỏ không?\n',
          '1 vài khối hình mà bé mới xếp không?\n', ,
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: true },
        ],
      },
      {
        questionText: 'Có phải thỉnh thoảng những hành động đó chỉ để khoe bạn, chứ không phải để được bạn gúp đỡ phải không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 10',
    questCase: [
      {
        questionText: 'Trẻ có đáp lại, phản ứng lại khi được gọi tên không (phía dưới là các phản ứng ĐẠT)\n',
        descrip: [
          
          'Tìm kiếm người gọi không?\n',
          'Nói hoặc bập bẹ không?\n',
          'Ngừng những việc đang làm lại không\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi con bạn đang KHÔNG mải tập trung vào một việc gì vui hoặc thú vị, con bạn làm gì khi bạn gọi tên trẻ (phía dưới là những phản ứng KHÔNG ĐẠT):\n',
        descrip: [
          'Không trả lời/phản ứng không?\n',
          'Có vẻ nghe nhưng phớt lờ bố mẹ không?\n',
          'Trả lời/ phản ứng chỉ khi bố mẹ đứng trước mặt không?\n',
          'Trả lời/ phản ứng chỉ khi có người chạm vào không\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: true },
        ],
      },
      {
        questionText: 'Những phản ứng nào con bạn thể hiện nhiều hơn?\n',
        answerOptions: [
          { answerText: 'Phản hồi ĐẠT', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Phản hồi KHÔNG ĐẠT', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 11',
    questCase: [
      {
        questionText: 'Khi bạn cười với trẻ, trẻ có cười lại với bạn không?\n',
        descrip: [
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Trẻ có... (Bên dưới là các ví dụ ĐẠT): \n',
        descrip: [
          'Cười khi bạn cười không?\n',     
          'Cười khi bạn vào phòng không?\n',
          'Cười khi bạn đi xa về không?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Trẻ có... (các ví dụ KHÔNG ĐẠT):\n',
        descrip: [
          'Thường xuyên mỉm cười không?\n',
          'Cười với đồ chơi hoặc hoạt động con yêu thích không?\n',
          'Cười vu vơ hoặc cười với một thứ không cụ thể?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: true },
        ],
      },
      {
        questionText: 'Con bạn thường xuyên làm giống nhóm ví dụ nào?\n',
        answerOptions: [
          { answerText: 'Nhóm ví dụ ĐẠT', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Nhóm ví dụ KHÔNG ĐẠT', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 12',
    questCase: [
      {
        questionText: 'Trẻ có cảm thấy khó chịu với bất cứ tiếng ồn nào không?\n',
        descrip: [
          'Chọn CÓ nếu đúng với từ 2 ví dụ trở lên: \n',
          'Máy giặt?\n',
          'Trẻ em đang khóc?\n',
          'Máy hút bụi?\n',
          'Máy sấy tóc?\n',
          'Xe cộ?\n',
          'Trẻ em hò hét và gào thét?\n',
          'Nhạc to?\n',
          'Điện thoại/ chuông cửa reo?\n',
          'Khu vực ồn ã như là siêu thị hoặc nhà hàng?\n',      
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: true },
        ],
      },
      {
        questionText: 'Con của bạn phản ứng với các âm thanh như thế nào? (Bên dưới là các câu trả lời ĐẠT)\n',
        descrip: [
          'Bình tĩnh che tai của con không?\n',
          'Nói với bạn là con không thích tiếng ồn đó không?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con của bạn phản ứng với các âm thanh như thế nào? (Bên dưới là các câu trả lời KHÔNG ĐẠT)\n',
        descrip: [
          'La hét không?\n',
          'Có khóc không?\n',
          'Che tai lại trong khi khó chịu?'
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: true ,isCorrect: true },
        ]
      },
      {
        questionText: 'Con bạn thường xuyên làm giống nhóm ví dụ nào?\n',
        answerOptions: [
          { answerText: 'Ví dụ ĐẠT', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Ví dụ KHÔNG ĐẠT', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 13',
    questCase: [
      {
        questionText: 'Trẻ có đi bộ không?\n',
        descrip: [
          '',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Trẻ có đi bộ mà không cần nắm/ giữ thứ gì đó không?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
     
    ],
  },
  {
    quest: 'Number 14',
    questCase: [
      {
        questionText: 'Trẻ có nhìn vào mắt bạn khi bạn đang nói chuyện với bé, chơi cùng bé hoặc mặc quần áo cho bé không\n',
        descrip: [
          '',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con bạn có nhìn vào mắt bạn...\n',
        descrip: [
          'Khi con cần gì đó không?\n',
          'Khi bạn đang chơi với con không?\n',
          'Khi bạn cho con ăn không?\n',
          'Khi bạn thay tã cho con không?\n',
          'Khi bạn đọc truyện cho con nghe?\n',
          'Khi bạn nói chuyện với con không?\n',      
        ],
        answerOptions: [
          { answerText: 'Có từ 2 câu trở lên', addPoint: false, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Hàng ngày, con bạn nhìn vào mắt bạn không?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi bạn và con ở cùng nhau cả ngày, con có nhìn vào mắt bạn ít nhất 5 lần không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 15',
    questCase: [
      {
        questionText: 'Trẻ có cố gắng bắt chước những điều bạn làm không?\n',
        descrip: [
          'Ví dụ như:\n',
          'Lè lưỡi của bạn?\n',
          'Tạo ra tiếng động vui tai?\n',
          'Vẫy chào tạm biệt?\n',
          'Vỗ tay?\n',
          'Đặt ngón tay lên môi để ra ký hiệu “suỵt”?\n',
          'Hôn gió?'      
        ],
        answerOptions: [
          { answerText: 'Có từ 2 câu trở lên', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Có với 1 câu hoặc Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
    ],
  },
  
  {
    quest: 'Number 16',
    questCase: [
      {
        questionText: 'Nếu bạn quay đầu để nhìn gì đó, trẻ có nhìn xung quanh để xem bạn đang nhìn cái gì không?\n',
        descrip: [
          '',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con bạn làm gì khi bạn quay đầu nhìn thứ gì đó (Bên dưới là các ví dụ ĐẠT):\n',
        descrip: [
          'Nhìn theo hướng mà bạn đang nhìn không?\n',
          'Chỉ vào vật mà bạn đang nhìn không?\n',
          'Nhìn xung quanh xem bạn đang nhìn cái gì?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Con bạn làm gì khi bạn quay đầu nhìn thứ gì đó (Bên dưới là các ví dụ KHÔNG ĐẠT):\n',
        descrip: [
          'Lờ bạn đi không?\n',
          'Nhìn vào mặt bạn không?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: false },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: true },
        ]
      },
      {
        questionText: 'Hành động nào con bạn thực hiện thường xuyên hơn?\n',
        answerOptions: [
          { answerText: 'Ví dụ ĐẠT', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Ví dụ KHÔNG ĐẠT', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  
  {
    quest: 'Number 17',
    questCase: [
      {
        questionText: 'Trẻ có cố gắng gây sự chú ý để bạn phải nhìn vào bé không?\n',
        descrip: [
          'Con bạn có làm ít nhất một trong số những điều này không……\n',
          'Nói “Mẹ, nhìn này!” hoặc “Nhìn con này!” không?\n',
          'Nói bập bẹ hoặc gây tiếng động để kéo sự chú ý của bạn vào con không?\n',
          'Nhìn bạn để được bạn khen hoặc nhận xét không?\n',
          'Cứ nhìn bạn để xem bạn có đang nhìn con không? '     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
    ],
  },
  
  {
    quest: 'Number 18',
    questCase: [
      {
        questionText: 'Trẻ có hiểu bạn nói gì khi bạn yêu cầu trẻ làm không?\n',
        descrip: [
          'Trẻ hiểu được yêu cầu một yêu cầu đơn giản mà không cần gợi ý bằng cử chỉ, điệu bộ không?\n',      
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi có gợi ý cho con, con bạn có làm theo yêu cầu không? Ví dụ như khi bạn mặc quần áo để đi chơi, bạn bảo con hãy đi lấy giầy của mình, con có hiểu không?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Nếu đến bữa cơm tối và thức ăn đã dọn lên bàn, và bạn bảo con ngồi xuống, con bạn có ngồi xuống bàn ăn không?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi không có gợi ý, con của bạn có làm theo được yêu cầu không? Chọn có nếu có ít nhất một ví dụ trẻ thực hiện được\n',
        descrip: [
          'Khi bạn nói, “Cho mẹ xem giầy của con” mà không chỉ vào giầy, không có điệu bộ hoặc đưa ra gợi ý, con bạn có chỉ vào giầy của bé không?\n',
          'Nếu bạn nói, “Lấy cho mẹ cái chăn” hoặc nhờ lấy vài đồ khác mà không chỉ, không có điệu bộ hoặc không đưa ra gợi ý, con bạn có lấy cho bạn không?\n',
          'Nếu bạn nói, “Để quyển sách lên ghế” mà không chỉ, không tỏ điệu bộ, hoặc không đưa gợi ý, con bạn có để quyển sách lên ghê không?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ],
      },
    ],
  },
  
  {
    quest: 'Number 19',
    questCase: [
      {
        questionText: 'Nếu có điều gì mới lạ, trẻ có nhìn bạn để xem bạn cảm thấy thế nào về việc xảy ra không?\n',
        descrip: [
          '',     
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Nếu trẻ nghe thấy một tiêng động lạ hoặc tiếng động ghê sợ, trẻ có nhìn mặt bạn trước khi có phản ứng không?\n',
        descrip: [
          '',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true, isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Trẻ có nhìn bạn khi gặp một người mới gặp/ mới quen không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ]
      },
      {
        questionText: 'Trẻ có nhìn bạn khi trẻ tiếp xúc với một cái gì đó xa lạ hay đáng sợ một chút không?\n',
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: true },
          { answerText: 'Không', addPoint: true, skipQuest: true ,isCorrect: false },
        ]
      },
    ],
  },
  {
    quest: 'Number 20',
    questCase: [
      {
        questionText: 'Trẻ có thích những hoạt động mang tính chuyển động không?\n',
        descrip: [
          'Ví dụ như trẻ có thích được tung lên hoặc đung đưa không?\n',      
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: true ,isCorrect: 'done' },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: false },
        ],
      },
      {
        questionText: 'Khi bạn đung đưa hoặc tung con lên, con bạn có phản ứng như thế nào?\n',
        descrip: [
          'Ví dụ như trẻ có một trong các biểu hiện dưới đây hoặc tương tự không?\n',
          'Cười hoặc mỉm cười?\n',
          'Nói chuyện hoặc nói bập bẹ được?\n',
          'Đòi chơi thêm bằng cách đưa tay ra?\n',
        ],
        answerOptions: [
          { answerText: 'Có', addPoint: false, skipQuest: false, isCorrect: 'done' },
          { answerText: 'Không', addPoint: false, skipQuest: false ,isCorrect: 'done' },
        ],
      },
    ],
  },
]

const resultTextOption = [
  'Tổng điểm là 0-2; nếu trẻ nhỏ hơn 24 tháng, làm lại một lần nữa sau sinh nhật 2 tuổi của trẻ. Chưa cần phải hành động gì trừ khi trong quá trình theo dõi bạn phát hiện nguy cơ rối loạn tự kỷ của trẻ.',
  'Tổng điểm từ 3-7; thực hiện bảng hỏi Phần Theo dõi (Giai đoạn thứ 2 của M-CHAT-R/F) để có thêm thông tin về những câu trả lời chỉ ra nguy cơ tự kỷ. Nếu điểm sàng lọc trẻ bằng bảng hỏi theo dõi vẫn là 2 hoặc cao hơn, đứa trẻ được xác nhận có kết quả sàng lọc dương tính. Hành động cần thiết: Giới thiệu trẻ đi đánh giá chẩn đoán và xác định tính hợp lệ cho chương trình can thiệp sớm. Nếu điểm từ 0-1, đứa trẻ được có kết quả sàng lọc âm tính. Không cần hành động gì cả trừ khi quá trình theo dõi cho thấy nguy cơ của trẻ đối với rối loạn tự kỷ. Trẻ nên được sàng lọc lại trong các lần thăm khám sức khỏe tiếp theo.',
  'Tổng điểm từ 8-20; có thể bỏ qua bước sàng lọc bằng bảng hỏi theo dõi và ngay lập tức giới thiệu trẻ đi đánh giá chẩn đoán và xác định tính hợp lệ cho chương trình can thiệp sớm. Bạn nên đến các cơ sở uy tín về đánh giá và chẩn đoán tự kỷ để xác định chính xác về tình trạng của con mình. Bạn có thể tìm thấy tên và địa chỉ của các cơ sở trong: Danh sách một số cơ sở y tế tập huấn và hiện đang có thực hiện đánh giá, chẩn đoán tự kỷ.',
]

const Quiz1 = () => {
  const navigation = useNavigation();
  // engine
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestionCase, setCurrentQuestionCase] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [result, setResult] = useState(0);
  const [resultText, setResultText] = useState(0);
  
  // yes button
  const checkAnwserOption = () => {
    if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[0].isCorrect == 'done') {
      setShowScore(true)
      scoreResult()
    } else {
      if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[0].addPoint == true) {
        setScore(score + 1)
        setCurrentQuestion(currentQuestion + 1)
        setCurrentQuestionCase(0)
      } else {
        if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[0].skipQuest == true) {
          setCurrentQuestion(currentQuestion + 1)
          setCurrentQuestionCase(0)
        } else {
          if (currentQuestionCase == questions[currentQuestion].questCase.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setCurrentQuestionCase(0)
        } else {
          setCurrentQuestionCase(currentQuestionCase + 1)
        }
        }
      }
    }
  };
  
  // no buttion
  const checkAnwserOption1 = () => {
    if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[1].isCorrect == 'done') {
      setShowScore(true)
      scoreResult()
    } else {
      if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[1].addPoint == true) {
        setScore(score + 1)
        setCurrentQuestion(currentQuestion + 1)
        setCurrentQuestionCase(0)
      } else {
        if (questions[currentQuestion].questCase[currentQuestionCase].answerOptions[1].skipQuest == true) {
          setCurrentQuestion(currentQuestion + 1)
          setCurrentQuestionCase(0)
        } else {
          if (currentQuestionCase == questions[currentQuestion].questCase.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setCurrentQuestionCase(0)
        } else {
          setCurrentQuestionCase(currentQuestionCase + 1)
        }
        }
      }
    }
  };

  // conclude 
  const scoreResult = () => {
    if (score < 3) {
      setResult('NGUY CƠ THẤP')
      setResultText(resultTextOption[0])
    } else { 
      if (score < 8) {
        setResult('NGUY CƠ TRUNG BÌNH')
        setResultText(resultTextOption[1])
      } else {
        setResult('NGUY CƠ CAO')
        setResultText(resultTextOption[2])
      }
    }
  }

  // reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0)
    setCurrentQuestionCase(0)
    setScore(0)
    setShowScore(false)
  }

  // quiz screen
  const theQuiz = () => {
    
    return (
      <View style={{height: '100%'}}>
        {/* logo */}
        <View
          style={{ width: 117, height: 50, alignSelf: 'center', alignItems: 'center', marginTop: 40, }}
        >
          <Text
            style={{
              fontFamily: 'NunitoSans_ExtraBold',
              textTransform: 'uppercase',
              color: '#99C0E9',
              textAlign: 'center',
              fontSize: 26,
              lineHeight: 35.46,
            }}
          >
            a<Text style={{ color: '#447DB9' }}>kid</Text>ta
          </Text>
          <Text
            style={{
              color: '#99C0E9',
              fontFamily: 'NunitoSans_Light',
              fontSize: 14,
              lineHeight: 19.1,
              textAlign: 'center',
            }}
          >
            Cùng con khôn lớn
          </Text>
        </View>
        
        {/* ProgressBar */}
        <View style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: '2%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
          }}>
          <Text style={{color: 'grey'}}>Tiến trình: {currentQuestion + 1}/20</Text>
          <Ionicons
            size={40}
            name="refresh-circle-outline"
            onPress={resetQuiz}
            style={{
              alignSelf: 'center',
              marginLeft: 1.5,
              marginBottom: 3,
              color: 'grey',
            }}
          />
        </View>
        
        {/* Question */}
        <ScrollView style={styles.questBox}>
          <Text style={styles.questStyle}>{questions[currentQuestion].questCase[currentQuestionCase].questionText}</Text>
          <Text style={styles.descripStyle}>{questions[currentQuestion].questCase[currentQuestionCase].descrip}</Text>
        </ScrollView>

        {/* answer */}
        <View style={{
          width: '80%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '5%',
          marginBottom: '5%',
          position: 'absolute',
          bottom: '0%'
        }}>
          <View style={styles.answerButton}>
            <Button
              colorScheme="#447DB9"
              onPress={checkAnwserOption}
            >
              <Text style={{color: '#447DB9', fontSize: 18, fontWeight: '500'}}>{questions[currentQuestion].questCase[currentQuestionCase].answerOptions[0].answerText}</Text>
            </Button>
          </View>
          <View style={styles.answerButton}>
            <Button 
              title = {questions[currentQuestion].questCase[currentQuestionCase].answerOptions[1].answerText}
              colorScheme="#447DB9"
              onPress={checkAnwserOption1}
            >
              <Text style={{color: '#447DB9', fontSize: 18, fontWeight: '500'}}>{questions[currentQuestion].questCase[currentQuestionCase].answerOptions[1].answerText}</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  };
  
  // score screen
  const scoreScreen = () => {
    return (
      <View style={{height: '100%'}}>
        <View style={styles.topNav}>
          <View style={{ marginLeft: 20, marginTop: 40, flexDirection: 'row' }}>
            <View>
              <Text style={styles.topNavTitle}>Kết quả M-CHART</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={{ width: '80%', alignSelf: 'center' }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 31,
              }}
            >
              <Image source={require('../../assets/Onboarding/result.png')} />
            </View>
            <View style={{ height: 51, marginTop: 33 }}>
              <Text style={{ fontFamily: 'Montserrat_Regular' }}>
                Số điểm đạt được: <Text style={{fontFamily: 'Montserrat_Bold'}}>{score}</Text>
              </Text>
              <Text style={{ fontFamily: 'Montserrat_Bold' }}>
                Kết quả: {result}
              </Text>
            </View>
            <View
              style={{
                marginTop: 5,
                width: '100%',
              }}
            >
              <Text
                style={{ fontFamily: 'Montserrat_Regular', lineHeight: 17.07, textAlign: 'justify' }}
              >
                {resultText}
              </Text>
            </View>
            <View style={{ height: 140, width: '100%' }}>
              <Text
                style={{
                  fontFamily: 'Montserrat_Light',
                  marginTop: 30,
                  lineHeight: 17.07,
                }}
              >
                <Text style={{fontFamily: 'Montserrat_Bold'}}>Lưu ý: </Text>M-CHAT-R chỉ là bộ công cụ sàng lọc đẻ phát hiện trẻ có
                nguy cơ tự kỷ và các rối loạn phá triển khác.
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'Montserrat_Bold',
                }}
              >
                Kết quả M-CHAT-R không phải kết quả chẩn đoán!
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#447DB9',
                width: '100%',
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 20,
              }}
            >
              <Button colorScheme="white" onPress={() => navigation.navigate('Maps')}>
                <Text style={{color: 'white'}}>Tìm kiếm nhà chuyên môn</Text>
              </Button>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 15,
                borderColor: '#447DB9',
                borderWidth: 1,
              }}
            >
              <Button title="" colorScheme="white" onPress={() => navigation.navigate("Home")}>
                <Text style={{color: '#447DB9'}}>Quay về trang chủ</Text>
              </Button>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                marginTop: 15,
                borderColor: '#447DB9',
                borderWidth: 1,
                marginBottom: '10%'
              }}
            >
              <Button colorScheme="white" onPress={resetQuiz}>
                <Text style={{color: '#447DB9'}}>Làm lại bài kiểm tra</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  };
  
  if (showScore) {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
        <View>
          {scoreScreen()}
        </View>
      </SafeAreaView>  
    );
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
        <View>
          {theQuiz()}
        </View>
      </SafeAreaView>  
    )
  }
  
};
const styles = StyleSheet.create ({
  questStyle: {
    fontSize: 20,
    fontFamily: 'Montserrat_Bold',
    color: '#447DB9',
    textAlign: 'justify',
    lineHeight: 26,
  },
  descripStyle: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: 'Montserrat_Regular',
    lineHeight: 22,
  },
  questBox: {
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    marginTop: '2%',
    borderWidth: 1,
  },
  answerButton: {
    backgroundColor: '447DB9',
    borderRadius: 13,
    paddingVertical: '2%',
    width: '45%',
    borderColor: '#447DB9',
    borderWidth: 2,
    justifyContent: 'center'
  },
  topNav: {
    width: '100%',
    height: 96,
    backgroundColor: '#F5B870',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topNavTitle: {
    fontFamily: 'Montserrat_Bold',
    fontSize: 18,
    lineHeight: 21.94,
    color: 'white',
    marginLeft: 16,
  },
})
export default () => {
  return (
    <NativeBaseProvider>
      <Quiz1/>
    </NativeBaseProvider>
  )
};
