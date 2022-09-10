module.exports = {
    publicPath: '/VueVAC.github.io/',
    css: {
        loaderOptions: {
            sass: {
                prebendData: `@import "@/styles/styles.scss";`
            }
        }
    }
};

