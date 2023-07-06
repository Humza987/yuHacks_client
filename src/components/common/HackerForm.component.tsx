"use client"

import React, { FC, useRef, useState } from 'react'

export const HackerForm: FC = () => {
    const onUpload = (files: File[]) => {
        const res: string[] = []
        files.forEach((file, index) => res[index] = file.name)
        console.log(res)
    }
    return (
        <div className='h-screen w-[85%] mx-auto bg-[#F6F6F6]'>
            <form action="#" className='pt-24'>
                <h1 className={`font-HindMadurai text-[32px] font-bold text-black`}>Hacker Application</h1>
                <hr className='h-[1.5px] bg-black/20' />
                <fieldset className={`mt-14`}>
                    <legend>General</legend>
                    <label className=''>Email *
                        <input className='w-full h-12 p-6 font-Arvo text-sm text-black text-opacity-[0.13] bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="email" name="email" placeholder='example@gmail.com' required />
                    </label>
                    <label>First Name *
                        <input type="text" name="first-name" required />
                    </label>
                    <label>Last Name *
                        <input type="text" name="last-name" required />
                    </label>
                    <label>School *
                        <input type="text" name="school" required />
                    </label>
                    <label>Year *
                        <input type="year" name="year" required />
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend>Portfolio</legend>
                    <label>Website
                        <input type="text" name="website" />
                    </label>
                    <label>Your Repository (Github, Gitlab, etc.)
                        <input type="text" name="repo" />
                    </label>
                    <label>LinkedIn Page
                        <input type="text" name="linkedin" />
                    </label>
                    <label>Resume (in PDF Format)
                        <FileDragDrop onUpload={onUpload} />
                    </label>
                    <label>Say something about yourself in 500 words or less
                        <input type="textarea" name="story" placeholder='Now, tell us your story...' />
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend>Special Requirements</legend>
                    <label>Do you have any allergy or need medical assistance?
                        <input type="email" name="email" required />
                    </label>
                    <label>Do you have any special dietary needs?
                        <input type="text" name="first-name" required />
                    </label>
                    <label>Clothing Size
                        <input type="text" name="last-name" required />
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <input type="reset" value="Clear" />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
}

interface FileDragDropProps {
    onUpload: (files: File[]) => void,
}

const FileDragDrop: FC<FileDragDropProps> = ({ onUpload }) => {

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            e.relatedTarget === undefined || e.currentTarget.contains(e.relatedTarget as Node)
        ) {
            return;
        }

        setIsDragging(false);

    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const newFiles = Array.from(e.dataTransfer.files);
        setUploadedFiles([...uploadedFiles, ...newFiles]);
        onUpload([...uploadedFiles, ...newFiles]);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-auto h-52 p-12 flex items-center justify-center flex-col flex-nowrap text-base text-[#555555] border-2 border-[#c3c3c3] ${isDragging ? '' : 'border-dashed'} rounded-3xl`}
        >
            Hey, drop me some files
            {isDragging ? <span
                role='img'
                aria-label='emoji'
                className={`text-6xl mt-5`}>
                &#128522;
            </span> : <span
                role='img'
                aria-label='emoji'
                className={`text-6xl mt-5`}
            >  &#128526;
            </span>}
        </div>
    )
}





