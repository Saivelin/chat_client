'use client'

import { useAddSomeFiles } from '@/features/useAddSomeFiles'
import { useUploadImage } from '@/features/useUploadImage'
import { ChangeEvent, Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'

const AddSomeFiles = ({
    setter,
    InputButton,
    inputRef,
    handleOnChange,
    onChooseFile
}: {
    setter: Dispatch<SetStateAction<string[]>>
    InputButton: ReactNode
    inputRef: any
    handleOnChange: any
    onChooseFile: any
}) => {
    return (
        <div>
            <input
                type='file'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleOnChange}
            />
            <button
                type='button'
                onClick={onChooseFile}
            >
                {InputButton}
            </button>
        </div>
    )
}

export default AddSomeFiles
