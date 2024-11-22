'use client'
import { Copy } from 'lucide-react';
import React, { useState } from 'react'

const EmailCopy = () => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false)
  function copyEmailToClipBoard() {
    setEmailCopied(false)
    navigator.clipboard.writeText("hello@jonathantrevino.com");
    setTimeout(() => {
      setEmailCopied(true)
    }, 300)
  }
  return (
    <div className='flex gap-2 items-center'>
      <div role='button' className='w-fit gap-[10px] flex text-[color:var(--cta)]' onClick={copyEmailToClipBoard}>
        <Copy />hello@jonathantrevino.com
      </div>
      {emailCopied &&
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      }
    </div>
  )
}

export default EmailCopy
