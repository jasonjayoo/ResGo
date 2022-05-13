import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Sign up for exclusive rates!</h1>
        <span className="mailDesc">Subscribe for members only rates</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Enter Your Email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList