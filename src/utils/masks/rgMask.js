export default function rgMask(value = '') {
  return value.replace(/\D/g, '').replace(/(\d{6})(\d{1})+?$/, '$1-$2')
}
