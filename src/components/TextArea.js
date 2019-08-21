import React from "react";
import Words from "./Words";
class TextareaPage extends React.Component {
  state = {
    text:
      "Đọc sách không chỉ là thư giãn mà nó còn mang tới cho ta nhiều điều bổ ích. Có lẽ bởi vậy mà Rene Descartes từng nói: “Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất của những thế kỷ đã trôi qua. sách là nơi con người lưu trữ lại toàn bộ những tri thức, những tinh hoa trí tuệ của con người về tất cả các mặt của con người từ thế hệ này qua thế hệ khác. Nó như một người bạn, một vật phẩm vô giá của nhân loại. Ngày nay, số lượng sách ngày càng nhiều với đủ các thể loại khác nhau giúp ích cho con người nhiều mặt trong cuộc sống. Và việc đọc sách dần trở thành một nét đẹp văn hóa vô cùng nhân văn. Đọc sách không chỉ là cách con người đốt thời gian của mình mà nó còn mang lại rất nhiều những ý nghĩa vô cùng giá trị. Sách chính là kho tàng kiến thức của cả nhân loại, chính vì thế, đọc sách chính là cách con người hấp thu những tinh hoa văn hóa, những kiến thức xã hội vô cùng quý báu. Nó giúp bạn học hỏi được những kinh nghiệm từ những người đi trước rồi áp dụng nó vào cuộc sống thực tiễn một cách nhuần nhuyễn. Không ít người đã được khai sáng nhờ đọc những cuốn sách hay. Một điển hình cho việc không ngừng đọc, không ngừng học hỏi không ai khác chính là vị lãnh tụ vĩ đại Hồ Chí Minh của chúng ta. Người đi qua nhiều nơi, tiếp xúc với nhiều người nhưng đi đâu Người cũng tìm tòi, cũng luôn mang theo mình những cuốn sách để không ngừng trau dồi cho mình những kiến thức. Để rồi khi đọc xong, khi trải nghiệm thực tế, Người mới thấu hiểu được nỗi thống khổ của những người dân bị áp bức, Người mới tìm ra con đường dẫn tới thắng lợi của các dân tộc bị áp bức chính là cách mạng xã hội chủ nghĩa… Không chỉ cung cấp cho con người những tri thức, những kinh nghiệm sống mà đọc sách còn là cách giúp con người thư giãn, thanh lọc và bồi bổ tâm hồn mình. Có không ít những cuốn sách giúp con người giải tỏa được tâm lý u ám, hướng họ tới những điều lương thiện, trong sáng và tốt đẹp hơn. Chắc hẳn, chúng ta đã quá quen với tựa đề “Hạt giống tâm hồn” – cuốn sách nổi tiếng được nhiều người lựa chọn đọc để soi mình vào đó, thanh lọc mình và học hỏi ở đó những điều tốt đẹp và bình dị nhất. Hay như những bạn nhỏ đọc những cuốn sách tuổi thơ đầy ngộ nghĩnh, nó không chỉ giúp các em phát triển trí não mà còn nuôi dưỡng tâm hồn trong sáng, thiện lương của các em. Bên cạnh đó, sách cũng được coi là một người bạn dễ đồng cảm và sẻ chia với con người. Rất nhiều người chọn sách theo tâm trạng, và khi đọc chúng, họ cảm thấy mình được chia sẻ rất nhiều. Nếu bạn vui và bạn chọn đọc 1 cuốn sách vui, bạn sẽ thấy niềm vui ấy được nhân lên rất nhiều. Nếu bạn buồn và bạn chọn một cuốn sách hợp tâm trạng, bạn sẽ thấy nỗi buồn của mình được san sẻ, bạn sẽ thấm thía những điều mình đã trải qua. Đọc sách có rất nhiều mặt lợi ích nhưng ngược lại, không đọc sách cũng có không ít những tác hại. Thật vậy, không đọc sách giống như bạn đang bó hẹp lại kiến thức của chính mình, từ làm giảm tầm nhìn của mình với cuộc sống đang ngày một phát triển như ngày nay. Tâm hồn bạn cũng theo đó mà cằn cỗi, khô cạn vì chẳng được chăm sóc, bồi đắp… Bạn sẽ giống như những con ếch mãi chỉ biết vùng sáng nhỏ bé trong cái giếng của chính mình. Đọc sách là một điều vô cùng bổ ích nhưng rất nhiều ngườ vẫn chưa biết cách đọc sách cũng như chọn lựa sách sao cho đúng. Họ thường đọc bừa bãi, đọc lướt để rồi những thứ đã đọc trôi đi nhanh chóng mà không đọng lại chút gì. Hãy biết cách chọn lựa cho mình những cuốn sách phù hợp với bản thân, phù hợp với lứa tuổi và nghề nghiệp của mình. Hãy dành một khoảng thời gian thật tập trung để đọc, để nghiền ngẫm những thứ mà sách dạy. Sau đó, hãy biết cách áp dụng những thứ được học từ sách vào cuộc sống. Có như vậy, giá trị của việc đọc sách mới thực sự phát huy hết tác dụng. Sách vừa là người bạn, vừa là người thầy của con người. Hãy rèn cho mình một thói quen đọc sách, một văn hóa đọc thực sự văn minh và biết cách chân quý những giá trị mà sách mang lại.",
    length: 859,
    edit: false,
    arr: []
  };

  onInputChange = event => {
    const text = event.target.value;
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text[i] !== " " &&
        text[i] !== "." &&
        text[i] !== "," &&
        text[i] !== "(" &&
        text[i] !== ")" &&
        text[i] !== "!"
      ) {
        count++;
      }
      while (
        text[i] !== " " &&
        text[i] !== "." &&
        text[i] !== "," &&
        text[i] !== "(" &&
        text[i] !== ")" &&
        text[i] !== "!" &&
        i < text.length
      ) {
        i++;
      }
    }
    //if (event.target.value !== null) {

    this.setState({ text: event.target.value, length: count });
    //console.log(this.state.text);
    //}
  };

  updatearr() {
    const { text } = this.state;
    let count = 0;
    let tmp = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        let str = "";
        while (
          text[i] !== " " &&
          text[i] !== "." &&
          text[i] !== "," &&
          text[i] !== "(" &&
          text[i] !== ")" &&
          text[i] !== "!" &&
          text[i] !== "-" &&
          i < text.length
        ) {
          str = str + text[i];
          i++;
        }
        if (i < text.length && text[i] !== " ") {
          str = str + text[i];
        }
        tmp[count] = { str, count };
        count++;
      }
    }
    this.setState({ arr: tmp });
  }

  componentDidMount() {
    const { text } = this.state;
    let count = 0;
    let tmp = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        let str = "";
        while (
          text[i] !== " " &&
          text[i] !== "." &&
          text[i] !== "," &&
          text[i] !== "(" &&
          text[i] !== ")" &&
          text[i] !== "!" &&
          text[i] !== "-" &&
          i < text.length
        ) {
          str = str + text[i];
          i++;
        }
        if (i < text.length && text[i] !== " ") {
          str = str + text[i];
        }
        tmp[count] = { str, count };
        count++;
      }
    }
    this.setState({ arr: tmp });
  }

  render() {
    const { arr, edit, length } = this.state;
    const { SetLength, IsButton } = this.props;
    const renderdWord = arr.map(word => {
      return <Words SetLength={SetLength} word={word.str} vt={word.count} />;
    });

    return (
      <div className="input-group">
        <button
          onClick={() => {
            SetLength(length);
            this.setState({ edit: !edit });

            this.updatearr();
          }}
          className="input-group-prepend"
        >
          <span className="input-group-text" id="basic-addon">
            <i style={{ margin: "5px" }} className="fas fa-pencil-alt prefix" />{" "}
            Edit
          </span>
        </button>
        <br />
        {edit ? (
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="20"
            value={this.state.text}
            onChange={this.onInputChange}
          />
        ) : (
          renderdWord
        )}
      </div>
    );
  }
}

export default TextareaPage;
