import { useEffect } from 'react'

export default function useHotKeys(key, action) {
   

useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action()
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
    // eslint-disable-next-line
  }, []);    

}
