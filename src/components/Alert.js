import React, { useRef } from 'react'

export default function Alert({message, type}) {

    const theme = [
        {
            type: 'danger',
            border: 'border-red-500',
            bg: 'bg-red-50',
            text: 'text-red-800',
        },
        {
            type: 'success',
            border: 'border-green-500',
            bg: 'bg-green-50',
            text: 'text-green-800',
        }
    ];

    let s_theme = theme[0];

    if (type) {
        let f_theme = theme.filter((item) => {
            return item.type == type;
        });
        if (f_theme.length) {
            s_theme = f_theme[0];
        }
    }


    const ref = useRef();
    const closeModel = () => {
        ref.current.classList += `p-6 ${s_theme.bg} my-4 transition-all duration-300 border-l-4 border-red-500 rounded-r-lg -translate-y-5 opacity-0`;
        ref.current.addEventListener('transitionend', ()=> {
            ref.current.remove();
        });
    }

    return (
        <div className={`p-6 ${s_theme.bg} my-4 transition-all duration-300 border-l-4 ${s_theme.border} rounded-r-lg`} ref={ref}>
            <div className="flex items-center">
                <h3 className={`${s_theme.text} font-medium`}>
                    {message}
                </h3>
                <button className="ml-auto p-4" onClick={closeModel}>
                    <svg className={`${s_theme.text}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.93341 6.00008L11.1334 1.80008C11.4001 1.53341 11.4001 1.13341 11.1334 0.866748C10.8667 0.600081 10.4667 0.600081 10.2001 0.866748L6.00008 5.06675L1.80008 0.866748C1.53341 0.600081 1.13341 0.600081 0.866748 0.866748C0.600082 1.13341 0.600082 1.53341 0.866748 1.80008L5.06675 6.00008L0.866748 10.2001C0.733415 10.3334 0.666748 10.4667 0.666748 10.6667C0.666748 11.0667 0.933415 11.3334 1.33341 11.3334C1.53341 11.3334 1.66675 11.2667 1.80008 11.1334L6.00008 6.93341L10.2001 11.1334C10.3334 11.2667 10.4667 11.3334 10.6667 11.3334C10.8667 11.3334 11.0001 11.2667 11.1334 11.1334C11.4001 10.8667 11.4001 10.4667 11.1334 10.2001L6.93341 6.00008Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
