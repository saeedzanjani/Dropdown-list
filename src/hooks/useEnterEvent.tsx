import React, { useEffect, useState } from 'react'

const useEnterEvent = () => {
  const [showInput, setShowInput] = useState<Boolean>(false)
    
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        setTimeout(() => setShowInput(!showInput), 500);
      }
    })
  }, [showInput])

  return {showInput}
}

export default useEnterEvent