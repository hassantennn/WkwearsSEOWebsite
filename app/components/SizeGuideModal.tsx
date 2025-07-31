import {useEffect, useState} from 'react';

export function SizeGuideModal() {
  const [open, setOpen] = useState(false);

  // open panel when clicking anchor link
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target && target.closest('a[href="#size-modal"]')) {
        event.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // allow closing with escape key
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close"
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        id="size-modal"
        aria-labelledby="size-modal-title"
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full invisible pointer-events-none'
        }`}
      >
        <button
          className="close absolute top-4 right-4 text-2xl"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <h2
          id="size-modal-title"
          className="font-['Playfair_Display'] text-[20px] mb-4 mt-8 text-center"
        >
          Size Guide
        </h2>
        <img
          src="/size-guide.svg"
          alt="Size guide chart"
          className="w-full h-auto px-4 pb-4"
        />
      </aside>
    </>
  );
}
