import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [messages,setMessages] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                if(headers['Content-Type'] !== 'multipart/form-data; charset=utf-8; boundary="--WebKitBoundary"') {
                    body = JSON.stringify(body)
                }

                if (headers['Content-Type'] === undefined) {
                    headers['Content-Type'] = 'application/json'
                }
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                setMessages(data.errors)
                throw new Error(data.message || 'Something went wrong...')
            }

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])
    const clearMessages = useCallback(()=>setMessages(null),[])
    return { loading, request, error, clearError,clearMessages,messages }
}