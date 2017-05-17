from django.http import HttpResponse
from rest_framework.views import APIView

from qrlocker.qr.utils import generate_qr_code


class QRView(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get(self, request):
        payload = str({
            'author': 'Komarov Valentin',
            'version': '0.0.1a',
            'request_data': 'some_unreal_data'
        })
        qr = generate_qr_code(payload, 10, 2)
        response = HttpResponse(content_type="image/png")
        qr.save(response, "PNG")
        return response
