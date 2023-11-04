import ContactEmailForm from './ContactEmailForm'
import ContactPresentation from './ContactPresentation'

const ContactPage = () => {
  return (
    <section className="container flex animate-fade flex-col items-center justify-start bg-primary-900 transition-all md:flex-row md:items-start md:justify-around">
      <ContactPresentation />
      <ContactEmailForm />
    </section>
  )
}

export default ContactPage
