const MAX_FILE_SIZE_MB = 50
const MAX_FILES = 5
const ALLOWED_FORMATS = ['doc', 'docx', 'xls', 'xlsx', 'txt', 'pdf', 'jpeg', 'jpg', 'png']

export const validateFiles = (files: File[], attachedFiles: File[]) => {
  const validFiles: File[] = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fileSizeMB = file.size / (1024 * 1024)
    const fileExtension = file.name.split('.').pop()?.toLowerCase()

    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      alert(`Файл ${file.name} превышает максимальный размер в ${MAX_FILE_SIZE_MB}MB.`)
    } else if (!ALLOWED_FORMATS.includes(fileExtension || '')) {
      alert(`Формат файла ${file.name} не поддерживается.`)
    } else if (attachedFiles.length + validFiles.length >= MAX_FILES) {
      alert(`Превышено максимальное количество файлов (${MAX_FILES}).`)
      break
    } else {
      validFiles.push(file)
    }
  }
  return validFiles
}

export const createMessageData = (message: string, author: string, isImage: boolean = false) => {
  return {
    message,
    author,
    timestamp: new Date().toLocaleTimeString(),
    isImage,
  }
}
