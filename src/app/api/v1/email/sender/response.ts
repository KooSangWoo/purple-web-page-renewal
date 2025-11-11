export const RES_0000 = {
  txid: crypto.randomUUID(),
  code: '0000',
  message: 'Success',
  description: '',
  timestamp: Date.now(),
  data: '이메일 전송 성공했습니다.',
}

export const RES_4001 = {
  txid: crypto.randomUUID(),
  code: '4001',
  message: 'Bad Request',
  description: '필수 입력값이 누락되었습니다.',
  timestamp: Date.now(),
  data: '이메일 주소 또는 메시지를 입력하세요.',
}

export const RES_4002 = {
  txid: crypto.randomUUID(),
  code: '4002',
  message: 'Bad Request',
  description: '이메일 주소가 올바르지 않습니다.',
  timestamp: Date.now(),
  data: '올바른 이메일 주소를 입력하세요. (예: example@example.com)',
}

export const RES_5000 = {
  txid: crypto.randomUUID(),
  code: '5000',
  message: 'Internal Server Error',
  description: '이메일 전송 중 오류가 발생했습니다.',
  timestamp: Date.now(),
  data: '이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.',
}
