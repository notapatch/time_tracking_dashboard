function AccountCard(props) {
  return (
    <div className="bg-report grid grid-cols-user-report xl:grid-cols-1 rounded-xl p-9 relative z-10">
      <div>
        <img className="relative z-30 inline-block h-16 w-16 rounded-full ring-2 ring-white"
             src={require(`./../assets/images/image-${props.account.username}.png`).default}
             alt="user portrait'"
        />
      </div>
      <div className="ml-5 text-left xl:ml-0 xl:mt-11">
        <h3 className="text-sm font-normal text-neutral-blue-200">Report for</h3>
        <h2 className="text-2xl xl:text-4xl xl:mb-10 font-light text-white">{props.account.name}</h2>
      </div>
    </div>
  )
}

export default AccountCard;