import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { useUploadImage } from "./useUploadImage"

export const useAddSomeFiles = (setter? : (any : any)=>any) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [selectedFileNames, setSelectedFileNames] = useState<string[]>([])

    const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e && e?.target && e?.target?.files && e?.target?.files?.length > 0 && e?.target?.files[0]) {
            setSelectedFileNames([...selectedFileNames, await useUploadImage(e.target.files[0])])
        }
    }

    const onChooseFile = () => {
        inputRef?.current ? inputRef?.current.click() : null
    }

    const removeFile: (name: string) => void = (name: string) => {
        if (selectedFileNames.length == 1) {
            setSelectedFileNames([])
            return
        }
        setSelectedFileNames(selectedFileNames.splice(selectedFileNames.indexOf(name) - 1, 1))
    }

    const clearFiles = () => {
        setSelectedFileNames([])
        if(inputRef?.current && inputRef?.current?.files){
            inputRef.current.value = ""
        }
    }


    useEffect(() => {
        setter ? 
            setter(selectedFileNames)
        : null
    }, [selectedFileNames])

    return {inputRef, handleOnChange, onChooseFile, removeFile, clearFiles, files : selectedFileNames}
}
