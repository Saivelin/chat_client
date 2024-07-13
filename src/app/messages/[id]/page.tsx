import MessageModule from '@/pages/MessageModule/MessageModule'

const page = ({ params } : {params: any}) => {
    const { id } = params

    return <MessageModule id={id} />
}

export default page
