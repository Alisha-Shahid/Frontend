import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="alishshahid7654@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="92 3224262094" Image={FiPhone} />
      <SingleInfo text="Lahore, Pakistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
