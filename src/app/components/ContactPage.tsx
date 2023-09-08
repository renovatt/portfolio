import ContactPresentation from './ContactPresentation'
import ContactEmailForm from './ContactEmailForm'

const ContactPage = () => {
  return (
    <section className="flex h-[90%] w-[95%] max-w-[1400px] animate-fade flex-col items-center justify-start transition-all md:flex-row md:items-start md:justify-around">
      <ContactPresentation />
      <ContactEmailForm />
    </section>
  )
}

export default ContactPage
