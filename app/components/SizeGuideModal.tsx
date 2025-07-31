import {useEffect, useRef} from 'react';

export function SizeGuideModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // open dialog when clicking anchor link
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (target && target.closest('a[href="#size-modal"]')) {
        event.preventDefault();
        dialogRef.current?.showModal();
        const first = dialogRef.current?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        first?.focus();
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // focus trap inside dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function trap(event: KeyboardEvent) {
      if (event.key !== 'Tab' || !dialog.open) return;
      const elements = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    dialog.addEventListener('keydown', trap);
    return () => dialog.removeEventListener('keydown', trap);
  }, []);

  return (
    <dialog id="size-modal" ref={dialogRef} aria-labelledby="size-modal-title">
      <button className="close" aria-label="Close" onClick={() => dialogRef.current?.close()}>
        ✕
      </button>
      <h2 id="size-modal-title" className="font-['Playfair_Display'] text-[20px] mb-4">
        Size Guide
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Size</th>
            <th>Bust</th>
            <th>Waist</th>
            <th>Hip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">XS</th>
            <td>32"</td>
            <td>24"</td>
            <td>34"</td>
          </tr>
          <tr>
            <th scope="row">S</th>
            <td>34"</td>
            <td>26"</td>
            <td>36"</td>
          </tr>
          <tr>
            <th scope="row">M</th>
            <td>36"</td>
            <td>28"</td>
            <td>38"</td>
          </tr>
          <tr>
            <th scope="row">L</th>
            <td>38"</td>
            <td>30"</td>
            <td>40"</td>
          </tr>
          <tr>
            <th scope="row">XL</th>
            <td>40"</td>
            <td>32"</td>
            <td>42"</td>
          </tr>
          <tr>
            <th scope="row">XXL</th>
            <td>42"</td>
            <td>34"</td>
            <td>44"</td>
          </tr>
        </tbody>
      </table>
    </dialog>
  );
}
