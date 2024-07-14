const getLastActiveDateNow = () => {
    const now = new Date()
    return `Был(-а) в сети ${now.toLocaleDateString("ru-RU")} в ${now.getHours()}:${now.getMinutes()}`
}