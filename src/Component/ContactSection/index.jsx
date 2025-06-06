import { AosWrapper, HightlightButton, SectionHeading } from "../Common/Wrapper";
import "./contact.scss"

const Contact = () => {
  return (
    <section id='contact' className="section">
      <AosWrapper animation={"fade-up"} anchor={"top top"}>
        <SectionHeading>What’s Next?</SectionHeading>
        <div className="section-container">
          <h3 className="contact-headline bright-text">
            Get In Touch
          </h3>
          <p className="contact-info">
            As I am looking for new opportunities, my inbox is open.
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          <HightlightButton>

            <a href="mailto:madhu.kahar2210@gmail.com" className="mail-text" >Say Hello!
            </a>

          </HightlightButton>
        </div>
      </AosWrapper>
    </section>
  )
}

export default Contact