const Header = () => {
  return (
    // <Logo />
    // <Search />
    // <SideIcons />
    <div className="flex justify-between border-b border-b-stone-300">
      <div>
        Logo
      </div>
      <div>
        <input placeholder="Search" />
      </div>

      <div>
        Icons
      </div>

    </div>
  )
}

export default Header