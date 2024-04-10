export default function Footer() {
  return (
    <footer>
      <div className="bg-white  dark:bg-gray-400 flex justify-center flex-col my-16">
        <h6 className="flex justify-center">Contact me:</h6>
        <div className="flex justify-center">
          <div>Phone: &nbsp; </div>
          <div>070 763 08 71</div>
        </div>
        <div className="flex justify-center">
          <div>E-mail: &nbsp;</div>
          <a>hedi_r@hotmail.com</a>
        </div>
        <div className="links flex justify-center space-x-6 pt-12">
          <a>Linkedin</a>
          <a>Github</a>
          <a>link</a>
          <a>link</a>
        </div>
      </div>
    </footer>
  );
}
