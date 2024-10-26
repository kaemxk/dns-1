const catalogMenu = require('./catalogMenu.json')
const chatHistory = require('./chatHistory.json')
const footerInfo = require('./footerInfo.json')
const headerInfo = require('./headerInfo.json')
const sliderProducts = require('./sliderProducts.json')
const sliderContent = require('./sliderContent.json')
const companyInfo = require('./companyInfo.json')

module.exports = () => ({
  headerInfo,
  footerInfo,
  catalogMenu,
  chatHistory,
  companyInfo,
  sliderProducts,
  sliderContent,
})
