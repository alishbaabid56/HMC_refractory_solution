// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Factory,
//   Send,
// } from "lucide-react";


// export default function Contact() {

//   const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;


//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     industry: "",
//     service: "",
//     message: "",
//   });



//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement |
//       HTMLTextAreaElement |
//       HTMLSelectElement
//     >
//   ) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   };




//   const handleSubmit = (
//     e: React.FormEvent
//   ) => {

//     e.preventDefault();


//     const message = `
// New Inquiry - HMC Refractory Solution

// Name:
// ${formData.name}

// Company:
// ${formData.company}

// Phone:
// ${formData.phone}

// Email:
// ${formData.email}

// Industry:
// ${formData.industry}

// Required Service:
// ${formData.service}

// Message:
// ${formData.message}
//     `;



//     const url =
//       `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//         message
//       )}`;


//     window.open(
//       url,
//       "_blank"
//     );

//   };





//   return (

//     <section
//       id="contact"
//       className="bg-slate-50 py-14 md:py-20"
//     >

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">


//         {/* Heading */}

//         <motion.div

//           initial={{
//             opacity:0,
//             y:25
//           }}

//           whileInView={{
//             opacity:1,
//             y:0
//           }}

//           transition={{
//             duration:0.6
//           }}

//           viewport={{
//             once:true
//           }}

//           className="mx-auto max-w-3xl text-center"

//         >


//           <div
//             className="
//             inline-flex
//             items-center
//             gap-2
//             rounded-full
//             bg-brand-yellow/15
//             px-4
//             py-2
//             text-sm
//             font-medium
//             text-brand-black
//             "
//           >

//             <Factory className="h-4 w-4 text-brand-yellow"/>

//             Contact Us

//           </div>




//           <h2
//             className="
//             mt-5
//             font-heading
//             text-3xl
//             font-bold
//             text-brand-black
//             sm:text-4xl
//             "
//           >

//             Let's Discuss Your

//             <span className="block text-brand-yellow">
//               Industrial Requirements
//             </span>

//           </h2>




//           <p
//             className="
//             mx-auto
//             mt-4
//             max-w-2xl
//             text-sm
//             leading-7
//             text-gray-600
//             sm:text-base
//             "
//           >

//             Contact HMC Refractory Solution for reliable
//             refractory products, installation services,
//             and high-temperature industrial solutions.

//           </p>


//         </motion.div>





//         {/* Main Content */}

//         <div
//           className="
//           mt-12
//           grid
//           gap-6
//           lg:grid-cols-2
//           lg:gap-8
//           " 
//         >





//           {/* Company Information */}


//           <motion.div

//             initial={{
//               opacity:0,
//               x:-30
//             }}

//             whileInView={{
//               opacity:1,
//               x:0
//             }}

//             transition={{
//               duration:0.6
//             }}

//             viewport={{
//               once:true
//             }}

//           >



//             <h3
//               className="
//               text-2xl
//               font-bold
//               text-brand-black
//               "
//             >

//               HMC Refractory Solution

//             </h3>




//             <p
//               className="
//               mt-4
//               max-w-md
//               text-sm
//               leading-7
//               text-gray-600
//               "
//             >

//               Providing professional refractory solutions
//               for boilers, furnaces, kilns, and other
//               high-temperature industrial applications.

//             </p>





//             {/* Contact Details */}

//             <div
//               className="
//               mt-8
//               space-y-5
//               "
//             >



//               {/* Phone */}

//               <div className="flex items-center gap-4">


//                 <div
//                   className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-brand-yellow/15
//                   "
//                 >

//                   <Phone className="h-5 w-5 text-brand-yellow"/>

//                 </div>



//                 <div>

//                   <p className="text-sm font-semibold text-brand-black">
//                     Phone / WhatsApp
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     +92 3170221769
//                   </p>

//                 </div>


//               </div>






//               {/* Email */}

//               <div className="flex items-center gap-4">


//                 <div
//                   className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-brand-yellow/15
//                   "
//                 >

//                   <Mail className="h-5 w-5 text-brand-yellow"/>

//                 </div>



//                 <div>

//                   <p className="text-sm font-semibold text-brand-black">
//                     Email Address
//                   </p>

//                   <p className="text-sm text-gray-600">
//                     hasnainmemon7b1@gmail.com
//                   </p>

//                 </div>


//               </div>






//               {/* Address */}

//               <div className="flex items-start gap-4">


//                 <div
//                   className="
//                   flex
//                   h-10
//                   w-10
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-lg
//                   bg-brand-yellow/15
//                   "
//                 >

//                   <MapPin className="h-5 w-5 text-brand-yellow"/>

//                 </div>



//                 <div>

//                   <p className="text-sm font-semibold text-brand-black">
//                     Company Address
//                   </p>


//                   <p className="text-sm leading-6 text-gray-600">
//                     Site Area, Jamia Binoriya, Near Attock Petrol Pump
//                   </p>


//                 </div>


//               </div>



//             </div>


//           </motion.div>          {/* Contact Form */}


//           <motion.form

//             onSubmit={handleSubmit}

//             initial={{
//               opacity:0,
//               x:30
//             }}

//             whileInView={{
//               opacity:1,
//               x:0
//             }}

//             transition={{
//               duration:0.6
//             }}

//             viewport={{
//               once:true
//             }}

//             className="
//             rounded-2xl
//             border
//             border-gray-200
//             bg-white
//             p-6
//             shadow-md
//             "

//           >





//             <div className="grid gap-4 sm:grid-cols-2">



//               <input
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 onChange={handleChange}
//                 className="input-style"
//               />



//               <input
//                 name="company"
//                 placeholder="Company Name"
//                 onChange={handleChange}
//                 className="input-style"
//               />



//               <input
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 onChange={handleChange}
//                 className="input-style"
//               />



//               <input
//                 name="email"
//                 placeholder="Email Address"
//                 onChange={handleChange}
//                 className="input-style"
//               />


//             </div>








//             <select
//               name="industry"
//               onChange={handleChange}
//               className="input-style mt-4"
//             >

//               <option>
//                 Select Industry
//               </option>


//               <option>
//                 Steel Mill
//               </option>


//               <option>
//                 Cement Factory
//               </option>


//               <option>
//                 Glass Factory
//               </option>


//               <option>
//                 Power Plant
//               </option>


//               <option>
//                 Textile Mill
//               </option>


//               <option>
//                 Other
//               </option>


//             </select>








//             <select
//               name="service"
//               onChange={handleChange}
//               className="input-style mt-4"
//             >


//               <option>
//                 Required Service
//               </option>



//               <option>
//                 Refractory Products
//               </option>



//               <option>
//                 Refractory Installation
//               </option>



//               <option>
//                 Boiler Refractory Work
//               </option>



//               <option>
//                 Furnace & Kiln Solutions
//               </option>



//             </select>








//             <textarea

//               name="message"

//               rows={4}

//               placeholder="Describe Your Requirement"

//               onChange={handleChange}

//               className="input-style mt-4"

//             />









//             <button

//               type="submit"

//               className="
//               mt-5
//               flex
//               w-full
//               items-center
//               justify-center
//               gap-2
//               rounded-full
//               bg-brand-yellow
//               py-3
//               font-semibold
//               text-black
//               transition
//               hover:bg-yellow-500
//               "

//             >

//               Send Inquiry


//               <Send className="h-4 w-4"/>


//             </button>



//           </motion.form>



//         </div>


//       </div>


//     </section>

//   );

// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Factory,
  Send,
} from "lucide-react";


export default function Contact() {


  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");



  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    service: "",
    message: "",
  });




  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };






  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    setLoading(true);
    setStatus("");



    try {


      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers:{
            "Content-Type":"application/json",
          },

          body: JSON.stringify(formData),

        }
      );




      const data = await response.json();




      if(data.success){

        setStatus(
          "Your inquiry has been sent successfully!"
        );


        setFormData({
          name:"",
          company:"",
          phone:"",
          email:"",
          industry:"",
          service:"",
          message:"",
        });


      }

      else{

        setStatus(
          "Something went wrong. Please try again."
        );

      }




    }

    catch(error){

      console.error(error);

      setStatus(
        "Failed to send inquiry."
      );

    }


    finally{

      setLoading(false);

    }



  };







  return (

<section
id="contact"
className="bg-slate-50 py-14 md:py-20"
>


<div className="mx-auto max-w-7xl px-6 lg:px-8">



<motion.div

initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="mx-auto max-w-3xl text-center"

>


<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-brand-yellow/15
px-4
py-2
text-sm
font-medium
text-brand-black
"
>

<Factory className="h-4 w-4 text-brand-yellow"/>

Contact Us

</div>




<h2
className="
mt-5
font-heading
text-3xl
font-bold
text-brand-black
sm:text-4xl
"
>

Let's Discuss Your

<span className="block text-brand-yellow">
Industrial Requirements
</span>

</h2>




<p
className="
mx-auto
mt-4
max-w-2xl
text-sm
leading-7
text-gray-600
sm:text-base
"
>

Contact HMC Refractory Solution for reliable
refractory products, installation services,
and high-temperature industrial solutions.

</p>



</motion.div>






<div
className="
mt-12
grid
gap-6
lg:grid-cols-2
lg:gap-8
"
>





{/* LEFT SIDE */}

<motion.div

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

>


<h3
className="
text-2xl
font-bold
text-brand-black
"
>

HMC Refractory Solution

</h3>




<p
className="
mt-4
max-w-md
text-sm
leading-7
text-gray-600
"
>

Providing professional refractory solutions
for boilers, furnaces, kilns, and other
high-temperature industrial applications.

</p>




<div
className="
mt-8
space-y-5
"
>


<div className="flex items-center gap-4">

<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/15">

<Phone className="h-5 w-5 text-brand-yellow"/>

</div>


<div>

<p className="text-sm font-semibold text-brand-black">
Phone / WhatsApp
</p>

<p className="text-sm text-gray-600">
+92 3170221769
</p>

</div>


</div>





<div className="flex items-center gap-4">

<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/15">

<Mail className="h-5 w-5 text-brand-yellow"/>

</div>


<div>

<p className="text-sm font-semibold text-brand-black">
Email Address
</p>

<p className="text-sm text-gray-600">
hasnainmemon7b1@gmail.com
</p>

</div>


</div>





<div className="flex items-start gap-4">


<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-yellow/15">

<MapPin className="h-5 w-5 text-brand-yellow"/>

</div>



<div>

<p className="text-sm font-semibold text-brand-black">
Company Address
</p>


<p className="text-sm leading-6 text-gray-600">
Site Area, Jamia Binoriya, Near Attock Petrol Pump
</p>


</div>



</div>


</div>



</motion.div>









{/* FORM */}


<motion.form

onSubmit={handleSubmit}

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="
rounded-2xl
border
border-gray-200
bg-white
p-6
shadow-md
"

>




<div className="grid gap-4 sm:grid-cols-2">


<input
name="name"
placeholder="Your Name"
required
value={formData.name}
onChange={handleChange}
className="input-style"
/>



<input
name="company"
placeholder="Company Name"
value={formData.company}
onChange={handleChange}
className="input-style"
/>



<input
name="phone"
placeholder="Phone Number"
required
value={formData.phone}
onChange={handleChange}
className="input-style"
/>



<input
name="email"
placeholder="Email Address"
value={formData.email}
onChange={handleChange}
className="input-style"
/>


</div>






<select
name="industry"
value={formData.industry}
onChange={handleChange}
className="input-style mt-4"
>

<option value="">
Select Industry
</option>

<option>Steel Mill</option>
<option>Cement Factory</option>
<option>Glass Factory</option>
<option>Power Plant</option>
<option>Textile Mill</option>
<option>Other</option>

</select>







<select
name="service"
value={formData.service}
onChange={handleChange}
className="input-style mt-4"
>

<option value="">
Required Service
</option>

<option>
Refractory Products
</option>

<option>
Refractory Installation
</option>

<option>
Boiler Refractory Work
</option>

<option>
Furnace & Kiln Solutions
</option>


</select>






<textarea

name="message"

rows={4}

placeholder="Describe Your Requirement"

value={formData.message}

onChange={handleChange}

className="input-style mt-4"

/>





<button

type="submit"

disabled={loading}

className="
mt-5
flex
w-full
items-center
justify-center
gap-2
rounded-full
bg-brand-yellow
py-3
font-semibold
text-black
transition
hover:bg-yellow-500
disabled:opacity-50
"

>


{
loading
?
"Sending..."
:
"Send Inquiry"
}



<Send className="h-4 w-4"/>


</button>





{
status && (

<p
className="
mt-4
text-center
text-sm
font-medium
text-green-600
"
>

{status}

</p>

)

}



</motion.form>



</div>


</div>


</section>


  );

}

