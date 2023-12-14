export default {
  namespace: 'cinemas',
  state: {
    list: []
  },
  reducers: {
    changeList(prevState: any, action: any) {
      return {
        ...prevState,
        list: action.payload
      }
    },
    clearList(prevState: any, action: any) {
      return {
        ...prevState,
        list: []
      }
    }
  },
  effects: {
    *getList(action: any, obj: any): any {
      console.log(action.payload.cityId)
      const { call, put } = obj
      let res = yield call(getListForCinemas, action.payload.cityId)
      yield put({
        type: 'changeList',
        payload: res
      })
    }
  }
}

async function getListForCinemas(cityId: number) {
  let res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=8429950`, {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1700309676199269302665217","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => res.json())
  console.log(res.data.cinemas)
  return res.data.cinemas
}