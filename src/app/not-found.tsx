import CustomLink from '@/components/CustomLink'
import Paragraph from '@/components/Paragraph'

const NotFound = () => {
  return (
    <div className="flex h-full animate-up flex-col items-center gap-y-5 pt-8 lg:h-[30rem] lg:justify-center lg:pt-0">
      <Paragraph
        text="A página que você está tentando acessar não existe."
        style="text-center"
      />

      <CustomLink
        href=""
        Icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.0001 12C21.0001 12.1989 20.9211 12.3897 20.7804 12.5303C20.6398 12.671 20.449 12.75 20.2501 12.75H5.56041L11.0307 18.2194C11.1004 18.2891 11.1557 18.3718 11.1934 18.4628C11.2311 18.5539 11.2505 18.6515 11.2505 18.75C11.2505 18.8486 11.2311 18.9461 11.1934 19.0372C11.1557 19.1282 11.1004 19.2109 11.0307 19.2806C10.961 19.3503 10.8783 19.4056 10.7873 19.4433C10.6962 19.481 10.5986 19.5004 10.5001 19.5004C10.4016 19.5004 10.304 19.481 10.2129 19.4433C10.1219 19.4056 10.0392 19.3503 9.96948 19.2806L3.21948 12.5306C3.14974 12.461 3.09443 12.3783 3.05668 12.2872C3.01894 12.1962 2.99951 12.0986 2.99951 12C2.99951 11.9014 3.01894 11.8038 3.05668 11.7128C3.09443 11.6218 3.14974 11.539 3.21948 11.4694L9.96948 4.71938C10.1102 4.57865 10.3011 4.49959 10.5001 4.49959C10.6991 4.49959 10.89 4.57865 11.0307 4.71938C11.1715 4.86011 11.2505 5.05098 11.2505 5.25001C11.2505 5.44903 11.1715 5.6399 11.0307 5.78063L5.56041 11.25H20.2501C20.449 11.25 20.6398 11.329 20.7804 11.4697C20.9211 11.6103 21.0001 11.8011 21.0001 12Z"
              fill="#888888"
              className="duration-300 group-hover:fill-primary group-active:fill-primary"
            />
          </svg>
        }
        text="Voltar"
        style="max-w-[7.563rem] text-gray-100 justify-center"
      />
    </div>
  )
}

export default NotFound
