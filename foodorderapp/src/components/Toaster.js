export default function Toaster({ open }) {
  // function handleClose() {

  // }

  return (
    <>
      <div className="toast">
        <img src="/images/partPopper.svg" alt="clbImg" />
        <p>
          This <span>Valentine's week</span>, you are eligible for{" "}
          <strong>50% discount</strong>
        </p>
        {/* <img
          className="btn"
          src="/images/crossBtn.svg"
          alt="close"
          style={{
            width: "20px",
            height: "20px",
          }}
          // onClick={handleClose}
        /> */}
      </div>
    </>
  );
}
