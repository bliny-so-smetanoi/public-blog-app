import ProfilePhoto from "./components/ProfilePhoto";
import {useCallback, useContext, useEffect, useState} from "react";
import Loader from "../../components/Loader";
import ProfileInfo from "./components/ProfileInfo";
import ListOfArticles from "../../components/ListOfArticles";
import {useHttp} from "../../hooks/http-hook";
import {AuthContext} from "../../context/AuthContext";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

export default function ProfilePage() {
    const {request} = useHttp()
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState(null)
    const {isAuth} = useContext(AuthContext)
    const [page, setPage] = useState(0)
    const [articles, setArticles] = useState([])
    const [noMoreArticles, setNoMoreArticles] = useState(false)
    const [moreIsLoading, setMoreIsLoading] = useState(false)
    const [showLiked, setShowLiked] = useState(false)
    const {t, i18n} = useTranslation()
    const fetchProfileInfo = useCallback(async () => {
        const id = JSON.parse(localStorage.getItem('userData'))
        const data = await fetch('/api/auth/profile', {
            method: 'GET',
            headers: {Authorization: 'Bearer ' + id['userId']}
        }).then(res => res.json())

        setUserInfo(data)
        setLoading(false)
        await fetchUsersArticles()
    },[fetch])

    async function fetchUsersArticles() {
        setPage(0)
        const id = JSON.parse(localStorage.getItem('userData'))
        if(id === null) {
            const fetched = await request(`/api/articles/user/?id=${id['userId']}&page=${0}`, 'GET', null, {'Authorization': 'Bearer ' + ' '})
            setArticles(fetched)
            return
        }

        const fetched = await request(`/api/articles/user/?id=${id['userId']}&page=${0}`, 'GET', null, {'Authorization': 'Bearer ' + id['userId']})
        setArticles(fetched)
    }

    async function fetchLikedPosts() {
        setPage(0)
        const id = JSON.parse(localStorage.getItem('userData'))
        if(id === null) {
            const fetched = await request(`/api/articles/liked/?id=${id['userId']}&page=${0}`, 'GET', null, {'Authorization': 'Bearer ' + ' '})
            setArticles(fetched)
            return
        }
        console.log(page)
        const fetched = await request(`/api/articles/liked/?id=${id['userId']}&page=${0}`, 'GET', null, {'Authorization': 'Bearer ' + id['userId']})
        setArticles(fetched)
    }

    const loadMoreLiked = useCallback(async () => {
        const pageNum = page + 1
        const id = JSON.parse(localStorage.getItem('userData'))
        if (id === null) {
            setMoreIsLoading(true)
            const loadedArticles = await fetch(`/api/articles/liked/?id=${id['userId']}&page=${pageNum}`, {
                method: 'GET',
                headers:
                    {'Authorization': 'Bearer ' + ' ',
                        'Content-Type': 'application/json'}
            }).then((response)=> {
                setMoreIsLoading(false)
                return response.json()
            })

            if (loadedArticles.length === 0) {
                setNoMoreArticles(true)
            }

            setPage(page + 1)
            setArticles(articles.concat(loadedArticles))
            return
        }
        setMoreIsLoading(true)
        const loadedArticles = await fetch(`/api/articles/liked/?id=${id['userId']}&page=${pageNum}`, {
            method: 'GET',
            headers:
                {'Authorization': 'Bearer ' + id['userId'],
                    'Content-Type': 'application/json'}
        }).then((response)=> {
            setMoreIsLoading(false)
            return response.json()
        })

        if (loadedArticles.length === 0) {
            setNoMoreArticles(true)
        }

        setPage(page + 1)
        setArticles(articles.concat(loadedArticles))
    }, [fetch, page, articles])

    const loadMoreArticles = useCallback(async () => {
        const pageNum = page + 1
        const id = JSON.parse(localStorage.getItem('userData'))
        if (id === null) {
            setMoreIsLoading(true)
            const loadedArticles = await fetch(`/api/articles/user/?id=${id['userId']}&page=${pageNum}`, {
                method: 'GET',
                headers:
                    {'Authorization': 'Bearer ' + ' ',
                        'Content-Type': 'application/json'}
            }).then((response)=> {
                setMoreIsLoading(false)
                return response.json()
            })

            if (loadedArticles.length === 0) {
                setNoMoreArticles(true)
            }

            setPage(page + 1)
            setArticles(articles.concat(loadedArticles))
            return
        }
        setMoreIsLoading(true)
        const loadedArticles = await fetch(`/api/articles/user/?id=${id['userId']}&page=${pageNum}`, {
            method: 'GET',
            headers:
                {'Authorization': 'Bearer ' + id['userId'],
                    'Content-Type': 'application/json'}
        }).then((response)=> {
            setMoreIsLoading(false)
            return response.json()
        })

        if (loadedArticles.length === 0) {
            setNoMoreArticles(true)
        }

        setPage(page + 1)
        setArticles(articles.concat(loadedArticles))
    }, [fetch, page, articles])

    const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = async function() {
        scrollFunction()

        const scrollValue = getScrollBottom()

        if (scrollValue === 0 && !noMoreArticles && articles.length !== 0) {
            if (showLiked) {
                await loadMoreLiked()
                return
            }

            await loadMoreArticles()
        }
    }

    function scrollFunction() {
        if (mybutton !== null) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    }

    function getScrollBottom() {
        return document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        fetchProfileInfo()
    }, [fetchProfileInfo])

    return (
        <>
            <Helmet>
                <title>Your page</title>
            </Helmet>
            <main className={'homepage-main'}>
                {loading && <div align={'center'}><Loader/></div>}
                <div className={'profilepage-profile-info'}>

                    {!loading &&
                        <ProfilePhoto editable={true} image={userInfo.profile.image} reload={() => {
                            window.location.reload()
                        }}/>}
                    {!loading &&
                        <ProfileInfo editable={true} info={userInfo} reload={() => {
                            window.location.reload()
                        }}/>}

                </div>

                <div style={{display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                    {!showLiked && <p>{t('Your recent posts:')}</p>}
                    {showLiked && <p>{t('Your recent liked posts:')}</p>}
                <p style={{cursor: 'pointer',
                    textDecoration: 'underline',
                    fontSize: '16px'}}
                    onClick={async () => {
                        setNoMoreArticles(false)
                        await fetchLikedPosts()
                        setShowLiked(true)
                    }}>
                    {!showLiked && t('show your liked posts')}
                </p>
                </div>

                <div className={'homepage-main-container'}>
                <ListOfArticles onDelete={async () => {
                    setArticles([])
                    await fetchUsersArticles()
                }} articles={articles}/>
                {noMoreArticles && <div align={'center'}><p>{t('No more posts...')}</p></div>}
                <button onClick={topFunction} id={'myBtn'} title={'To top'}>{t('Go to top')}</button>
                {moreIsLoading && <div align={'center'}><Loader/></div>}
                </div>
            </main>
        </>
    )
}