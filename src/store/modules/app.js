
export default {
    state: {
        isMobile: false,
        marquee: null,
        banner: null,
        gameEn:{
            // pl_k:`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
            // FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
            // xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
            // gwQco1KRMDSmXSMkDwIDAQAB`,
            pr_k:`-----BEGIN RSA PUBLIC KEY-----
            MIICCgKCAgEAwC+fj1t6bcbC4IKv84bR94HgNmwfpCfjz+b0UaZO+8qyS131wqO7
            +AAYRh7M3lQFXN7z+1P729TRXiFQ+FyDUYexnbo8q8xuS1FI3hYpLDPoiWm08M0V
            NScSfG1SZClupjIOQc/G3UUq0Oy/RVKN96OSyBJEavbN9efGAUo5j+hJDeM5vADX
            h4ROGWpGhb6xcbP8QAZoDMQuHj2kqjDORDqUvViNJ8Yp3e7AiHk5bQYrhYqpabHJ
            fouvBGwpuSKh7XGrmOVbo6TYt9/ypAz/1iftcV6rRKYRTuEjoQHHcD9Jif2fuXCv
            4AWHhEgTye33YBxQHdWcp33YcyOe4PFgLbxQT0pmlR6nx8aPFMednVF4COa7pvJV
            9wFth+OM1B2K7sPBqkW5KNZxIU2LlSsd+mzyngYbJG98JBGvTL+dZkvFuzl7ap1b
            baAlER+Uam7B2QotvXLf8CYNrYnn6QRnMO44WFHXQuWc5TvH8g0dZneqzhx3Hcln
            TCeH/8sp/kJYvVDhpolqQHHv/ag/cO36pwtBWfzM0AkH4bI8XCHDees2w3dv9oQk
            s+qHIERxBq/kvLZ64O4j+Ka6Pd/P9+FyTamnFJnexomwwYOqBnQpXeenq66NQBIj
            owVbqcix8nEUXsJiIbI6tX8Ch63Cvhkkx2pUjty8ocLL3mQgsgkFxtcCAwEAAQ==
            -----END RSA PUBLIC KEY-----`
        }

    },

    getters: {
        isMobile: state => state.isMobile,
        marqueeData: state => state.marquee,
        bannerImage: state => state.banner,
        GameEn:state => state.gameEn,
    },

    mutations: {
        MarqueeData(state, payload) {
            state.marquee = payload
        },
        BannerImage(state, payload) {
            state.banner = payload
        }
    },
    namespaced: true
}
