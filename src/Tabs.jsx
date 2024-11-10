import { useState } from "react"

const Tabs = () => {
  const [show, setShow] = useState(true);

  return (
    <>
        <div>
            <button type="button" onClick={() => setShow(!show)}>tab1</button>
            {show && <p>content1</p>}
        </div>
        <div>
            <button type="button" onClick={() => setShow(!show)}>tab2</button>
            {show && <p>content2</p>}
        </div>
        <div>
            <button type="button" onClick={() => setShow(!show)}>tab3</button>
            {show && <p>content3</p>}
        </div>
        <div>
            <button type="button" onClick={() => setShow(!show)}>tab4</button>
            {show && <p>content4</p>}
        </div>
    </>
  );
};

export default Tabs;