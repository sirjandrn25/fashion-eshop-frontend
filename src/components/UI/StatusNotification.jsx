import React, { useEffect } from 'react'
import Card from './Card'
import { httpStatusActions } from '../../redux/http_status_slicer'
import { useSelector, useDispatch } from 'react-redux'

const base_class = 'py-3 px-5 w-[400px] rounded-lg flex flex-row items-center justify-between  '
const pending_class = 'bg-teal-700'
const failed_class = 'bg-red-600'
const success_class = 'bg-green-600'
const StatusNotification = () => {
  const { closeHttpStatus } = httpStatusActions
  const dispatch = useDispatch()
  const httpStatusState = useSelector((state) => state.httpStatus)

  useEffect(() => {
    const interval = setTimeout(() => {
      dispatch(closeHttpStatus())
    }, 5000)

    return () => clearInterval(interval)
  }, [httpStatusState.status, dispatch])

  if (!httpStatusState.showStatus) return

  let show_status_class = base_class + pending_class
  if (httpStatusState.status === 'success') {
    show_status_class = base_class + success_class
  }
  if (httpStatusState.status === 'failed') {
    show_status_class = base_class + failed_class
  }

  return (
    <div className='w-screen px-7 py-3 fixed bottom-0 left-0 right-0 transition-all duration-700 ease-in-out delay-900  z-50'>
      <div className={show_status_class}>
        <div className='flex flex-col '>
          <span className='text-white font-medium text-lg capitalize'>{httpStatusState.title}</span>
          <span className='text-white font-semibold text-sm'>{httpStatusState.message}</span>
        </div>
        <span
          onClick={(e) => dispatch(closeHttpStatus())}
          className='font-bold text-lg text-white cursor-pointer rounded-full px-4 py-2 border-2 border-white'>
          X
        </span>
      </div>
    </div>
  )
}

export default StatusNotification
