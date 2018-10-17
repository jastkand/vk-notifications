import soundFile from '../../assets/sound.mp3'

let sound = new Audio()
sound.src = soundFile

export default function playSound() {
  sound.play()
}
