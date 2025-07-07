import { SignUp } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes';

const SignUpComponent = () => {
  return (
    <SignUp
    appearance={{
        baseTheme: dark,
        elements: {
            rootBox: "flex justify-center items-center py-5",
            formFieldLabel: "text-white-50 font-normal",
            cardBox: "shadow-none",
            card: "bg-customgreys-secondarybg w-full shadow-none",
            footer: {
                background: "#25262F",
                padding: "0rem 2.5 rem",
                "& > div > div:nth-child(1)": {
                    background: "#252562F"
                }
            },
            formButtonPrimary: "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none",
            formFieldInput: "bg-customgreys-primarybg text-white-50 !shadow-none",
            footerActionLink: "text-primary-750 hover:text-primary-600"
        }
    }}
    />
  )
}

export default SignUpComponent