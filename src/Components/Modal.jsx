
function Modal(props) {
  return (
    <>
      <div className="modal">
        <div>
          <h3>제목</h3>
          <p> {props.vContent[props.vNum]} </p>
        </div>
        <div className="btnWrap">
          <button onClick={props.onclose}>닫기</button>
        </div>
      </div>
    </>
  )
}

export default Modal;