export default function pisMask(value = '') {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d{5})(\d{2})(\d{1})+?$/, '$1.$2.$3-$4')
}
