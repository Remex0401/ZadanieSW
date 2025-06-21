import { FC } from 'react';

export const Checkbox: FC = () => {
    return (
        <div>
             <input type="checkbox" 
                          className="sr-only peer"
                          name="filters"
                          value="active" />
                    <span className="
                          h-6 w-6
                          block sm:h-8 sm:w-8 border-2 rounded border-gray-300
                          peer-checked:before:content-['✔']
                          peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
                          peer-checked:before:text-black
                          peer-checked:border-black"
                          role="checkbox"/>
        </div>
    )
}
