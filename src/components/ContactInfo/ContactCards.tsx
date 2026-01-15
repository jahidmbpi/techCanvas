import { MdAlternateEmail, MdLocalPhone } from "react-icons/md";
import ContactCard from "./ContactCard";
import { IoLocationOutline } from "react-icons/io5";

const ContactCards = () => {
  return (
    <div className="mt-10 space-y-2">
      <ContactCard
        Icon={MdAlternateEmail}
        source="mailto:jahid.redmi10@gmail.com"
        contactTitle="Email"
        contactSource="jahid.redmi10@gmail.com"
      />
      <ContactCard
        Icon={MdLocalPhone}
        source="tel:+8801300109381"
        contactTitle="Phone"
        contactSource="+8801300109381"
      />
      <ContactCard
        Icon={IoLocationOutline}
        source="#"
        contactTitle="Address"
        contactSource="Fulbaria, Mymensingh, Bangladesh"
      />
    </div>
  );
};

export default ContactCards;
