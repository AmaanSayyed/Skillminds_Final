import InputField from "./InputField";
import TextAreaField from "./TextAreaField";


const ContactForm = ({handleSubmit,formData,handleChange,handleBlur,errors}) => {
    return (
        <form onSubmit={handleSubmit} className="contact-form ajax-contact" method='POST'>
            <div className="row">
                <InputField type="text" name="firstName" id="firstName" placeholder="First name" value={formData.firstName} onchange={handleChange} onBlur={handleBlur} icon="user" error={errors.firstName}/>
                <InputField type="text" name="lastName" id="lastName" placeholder="Last name" value={formData.lastName} onchange={handleChange} onBlur={handleBlur} icon="user" error={errors.lastName}/>
                <InputField type= "text" name="email" id="email" placeholder="Email Address" value={formData.email} onchange={handleChange} onBlur={handleBlur} icon="envelope" error={errors.email}/>
                <InputField type="tel" name="phone" id="phone" placeholder="Phone Number" value={formData.phone} onchange={handleChange} onBlur={handleBlur} icon="phone" error={errors.phone}/>
                <InputField type="text" name="organizationName" id="organizationName" placeholder="Organization Name" value={formData.organizationName} onchange={handleChange} onBlur={handleBlur} icon="building" error={errors.organizationName}/>
                <TextAreaField name="message" id="message" placeholder="Your message" value ={formData.message} onchange={handleChange} onBlur={handleBlur} icon="comment" error={errors.message}/>   
                
            </div>
            <div className="form-btn text-xl-start text-center col-12">
                <button className="th-btn" type="submit">Send Message<i className="fa-regular fa-arrow-right ms-2"></i></button>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
        </form>
    );
}
 
export default ContactForm;

