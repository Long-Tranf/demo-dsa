import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="grid wide">
        <div className="innerContact">
          <h1 className="headingContact">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <div className="wrappInputContact">
            <div className="contactLeft">
              <input
                type="text"
                placeholder="Tiêu đề"
                className="inputContact"
              />
              <div className="boxInputContact">
                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="inputContact"
                />
                <input
                  type="text"
                  placeholder="Email của bạn"
                  className="inputContact"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Nội dung"
                className="textareaContact"
              ></textarea>
              <button className="btnContact">GỬI</button>
            </div>
            <div className="contactRight">
              <h5>Hiệp hội doanh nghiệp phần mềm Đà Nẵng</h5>
              <div className="wrappInfoContact">
                <div>icon</div>
                <div>
                  <p>Tầng 4 tòa nhà công vân phần mềm Đà Nẵng</p>
                  <p>02 Quang Trung</p>
                  <p>Quận Hải Châu</p>
                  <p>TP Đà Nẵng</p>
                </div>
              </div>
              <div className="wrappInfoContact">
                <div>icon</div>
                <div>02363 888 665</div>
              </div>
              <div className="wrappInfoContact">
                <div>icon</div>
                <div>contact@dsa.org.vn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
