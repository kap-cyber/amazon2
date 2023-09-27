import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          font-size:20px;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return( <Wrapper>
    <h2 className="common-heading">Feel Free Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6620.814260388689!2d77.36676926327856!3d28.620893861762784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce544eaaaaaab%3A0x89ae88842b8d643a!2sAmazon%20E-Commerce%20Company!5e0!3m2!1sen!2sin!4v1694088272038!5m2!1sen!2sin" width="100%" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xjvqrlvy" method='POST' className="contact-inputs">
          <input className="fs-5" type="text" placeholder="Username" name='username' required autoComplete="off"  />
          <input type="email" name='Email' placeholder="Email" autoComplete="off" required  />
          <textarea name="Message"  cols="30" rows="10" required autoComplete="off" placeholder="Enter your message here "></textarea>
          <input type="submit" value='Send' />
        </form>
      </div>
    </div>
  </Wrapper>
  )
};

export default Contact;
