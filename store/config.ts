import { makeAutoObservable } from 'mobx'
import { type Config } from 'type'

class ConfigStore {
  currentDate = new Date()
  // Formatted in ISO 8601 Date-Time format
  applyBeginTime: Date = new Date(0)
  applyEndTime: Date = new Date(0)

  constructor () {
    makeAutoObservable(this)
  }

  updateDate () {
    this.currentDate = new Date()
  }

  get isAvailable () {
    const { currentDate, applyBeginTime, applyEndTime } = this
    return currentDate >= applyBeginTime && currentDate <= applyEndTime
  }

  get isBefore () {
    const { currentDate, applyBeginTime } = this
    return currentDate < applyBeginTime
  }

  get isAfter () {
    const { currentDate, applyEndTime } = this
    return currentDate > applyEndTime
  }

  // eslint-disable-next-line complexity
  get countDown () {
    if (this.isAfter) {
      return '报名结束'
    }
    const { hours, minutes, seconds } = this.timeDelta
    const textHours = hours < 10 ? `0${hours}` : hours
    const textMinutes = minutes < 10 ? `0${minutes}` : minutes
    const textSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${textHours}:${textMinutes}:${textSeconds}`
  }

  get timeDelta () {
    const timeDeltaValue = this.applyEndTime.getTime() - this.currentDate.getTime()
    const timeDelta = {
      hours: Math.floor(timeDeltaValue / (1000 * 60 * 60)),
      minutes: Math.floor(timeDeltaValue / (1000 * 60)) % 60,
      seconds: Math.floor(timeDeltaValue / 1000) % 60
    }
    return timeDelta
  }

  setConfig (config: Config) {
    this.applyBeginTime = new Date(config.applyBeginTime)
    this.applyEndTime = new Date(config.applyEndTime)
  }
}

const config = new ConfigStore()

export default config
