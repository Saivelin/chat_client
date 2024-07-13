import axios from "axios"

export const useUploadImage = async (e : any) => {
    const formData =new FormData()
    formData.append('file', e)

    const file = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/upload`, formData)
    return file.data
}