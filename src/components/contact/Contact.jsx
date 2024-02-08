import React from 'react'
import './contact.css'

const Contact = () => {
  return (
<section class="contact container section" id="contact">
  <h2 class="section__title">Get In Touch</h2>

  <div class="contact__container grid">
    <div class="contact__info">
      <h3 class="contact__title">Let's connect!</h3>
      <div class="contact__tiles">

        <div class="contact__tile">
          <a href="mailto:thegawkyeditor@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i>
            <p>Email</p>
          </a>
        </div>

        <div class="contact__tile">
          <a href="https://www.linkedin.com/in/shivtomar30/" target="_blank">
            <i class="fab fa-linkedin"></i>
            <p>LinkedIn</p>
          </a>
        </div>

        <div class="contact__tile">
          <a href="https://www.instagram.com/azhilus" target="_blank">
            <i class="fab fa-instagram"></i>
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact